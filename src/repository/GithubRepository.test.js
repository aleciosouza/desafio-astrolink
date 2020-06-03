import axios from 'axios';
import GitHubRepository from './githubRepository'

jest.mock('./githubRepository');
jest.mock('axios');

beforeEach(() => {
    GitHubRepository.mockClear();
});

describe('GithubRepository', () => {
    it('Tem instância do axios', () => {
        const repository = new GitHubRepository();
        expect(GitHubRepository).toHaveBeenCalledTimes(1);
        expect(repository).not.toBeNull();
        expect(repository.http).not.toBeNull();
    });
});

describe('GithubRepository.getUser', () => {
    it('Busca usuario na api do github com sucesso', async () => {
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
        const repository = new GitHubRepository();

        repository.getUser.mockImplementationOnce(() => Promise.resolve(data));
        
        await expect(repository.getUser(username)).resolves.toEqual(data);
    });
});

describe('GithubRepository.getReposByUser', () => {
    it('Busca repos do usuario na api do github com sucesso', async () => {
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
        const repository = new GitHubRepository();        
        repository.getReposByUser.mockImplementationOnce(() => Promise.resolve(data));
        
        await expect(repository.getReposByUser(username)).resolves.toEqual(data);
    });
});

