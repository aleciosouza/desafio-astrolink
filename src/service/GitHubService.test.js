import GitHubService from './GitHubService'

jest.mock('./GitHubService');

beforeEach(() => {
    GitHubService.mockClear();
});

describe('GithubService', () => {
    it('Tem instância do repository', () => {
        const service = new GitHubService();
        expect(GitHubService).toHaveBeenCalledTimes(1);
        expect(service).not.toBeNull();
        expect(service.repository).not.toBeNull();
    });

    it('Utiliza o repository para buscar usuario', async () => {
        const data = {
            data: {
                id: 1060,
                login: "andrew",
                avatar_url: "https://avatars2.githubusercontent.com/u/1060?v=4",
                email: null,
                bio: "Software engineer and researcher",
                followers: 2325,
                following: 3145,
            }
        }

        const username = 'andrew';
        const service = new GitHubService();

        service.getUser.mockImplementationOnce(() => Promise.resolve(data));

        await expect(service.getUser(username)).resolves.toEqual(data);
    });

    it('Utiliza o repository para buscar lista de repos', async () => {
        const data = {
            data: [
                {
                    id: 14993753,
                    name: "3D-contributions",
                    description: "[UNMAINTAINED] 3D print your github contributions graph",
                    stargazers_count: 2,
                    language: "JavaScript",
                    svn_url: "https://github.com/andrew/3D-contributions",
                },
                {
                    id: 114767955,
                    name: "a2-in-memory-web-api",
                    description: "An in-memory web api for demos and tests",
                    stargazers_count: 1,
                    language: "JavaScript",
                    svn_url: "https://github.com/andrew/a2-in-memory-web-api",
                },
            ]
        }
        const username = 'andrew';
        const service = new GitHubService();
        service.getReposByUser.mockImplementationOnce(() => Promise.resolve(data));

        await expect(service.getReposByUser(username)).resolves.toEqual(data);
    });

    it('Valida nome do usuário do GitHub', () => {
        const service = new GitHubService();
        expect(service.validateUsername('-test')).not.toBeNull();
        expect(service.validateUsername('test test')).not.toBeNull();
        expect(service.validateUsername('')).not.toBeNull();
        expect(service.validateUsername(new Array(40).join('a'))).not.toBeNull();
        expect(service.validateUsername('test-test')).toBeUndefined();
        expect(service.validateUsername('uSuARiOVaLiDo')).toBeUndefined();
    });

});


