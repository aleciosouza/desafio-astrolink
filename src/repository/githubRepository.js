import Repository from './repository'

class GitHubRepository extends Repository {

    getUser(username) {
        return this.http.get(`users/${username}`);
    }

    getReposByUser(username) {
        return this.http.get(`users/${username}/repos`);
    }

}

export default GitHubRepository;
