import axios from 'axios'

class Repository {
    constructor(){
        this.http = axios.create({
            baseURL: 'https://api.github.com/',
            timeout: 10000,
            headers: {'Content-Type': 'application/json'}
        });
    }
}

export default Repository;
