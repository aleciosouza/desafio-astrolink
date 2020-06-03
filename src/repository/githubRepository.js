import axios from 'axios'

export class GitHubRepository {

    constructor() {
        this.http = axios.create({
            baseURL: 'https://api.github.com/',
            timeout: 10000,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    getUser(username) {
        return this.http.get(`users/${username}`);
    }
   
    getReposByUser(username) {
        return this.http.get(`users/${username}/repos`);
    }

}

export default GitHubRepository;