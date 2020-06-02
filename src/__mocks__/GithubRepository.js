const USER_DATA = {
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

const USER_REPOS_DATA = {
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

export class GitHubRepository {

    getUser(username) {
        return Promise.resolve(USER_DATA);
    }

    getReposByUser(username) {
        return Promise.resolve(USER_REPOS_DATA);
    }

}

export default GitHubRepository;