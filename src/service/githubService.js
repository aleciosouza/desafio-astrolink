import GitHubRepository from '../repository/githubRepository'

class GitHubService {

    constructor() {
        this.repository = new GitHubRepository();
    }

    async getUser(username) {
        return new Promise(async (resolve, reject) => {
            try {
                const { data } = await this.repository.getUser(username);
                const repos = await this.getReposByUser(username);
                resolve({
                    id: data.id,
                    login: data.login,
                    avatar_url: data.avatar_url,
                    followers: data.followers,
                    following: data.following,
                    bio: data.bio,
                    email: data.email,
                    repos
                });
            } catch (e) {
                reject(e);
            }
        });
    }

    async getReposByUser(username) {
        return new Promise(async (resolve, reject) => {
            try {
                const { data } = await this.repository.getReposByUser(username);
                const repos = data.map(repo => {
                    return {
                        id: repo.id,
                        name: repo.name,
                        description: repo.description,
                        stargazers_count: repo.stargazers_count,
                        language: repo.language,
                    }
                });
                resolve(repos);
            } catch (e) {
                reject(e);
            }
        });
    }

}

export default GitHubService