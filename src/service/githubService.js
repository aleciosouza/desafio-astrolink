import GitHubRepository from '../repository/GithubRepository'

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
                    user: {
                        id: data.id,
                        login: data.login,
                        avatar_url: data.avatar_url,
                        followers: data.followers,
                        following: data.following,
                        bio: data.bio,
                        email: data.email,
                    },
                    repos: repos
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
                        svn_url: repo.svn_url,
                    }
                }).sort((a, b) => {
                    return (a.stargazers_count < b.stargazers_count) ? 1 : -1
                });

                resolve(repos);
            } catch (e) {
                reject(e);
            }
        });
    }

    validateUsername(username) {
        const reg = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i
        const valid = reg.test(username);
        let error = null;

        if (!valid) {
            if (!username) {
                error = 'Informe um usuário';
            } else if (username.length > 39) {
                error = 'O nome de usuário pode ter no máximo 39 caracteres.';
            } else if (username[0] === '-') {
                error = 'O nome de usuário não pode começar com hífem.';
            } else {
                error = 'O nome de usuário não pode conter caracteres especiais.';
            }
        }

        return error;
    }

}

export default GitHubService