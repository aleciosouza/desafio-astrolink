# GitHubRepository
Reponsável por chamar a API do Github.

    npm i axios
    yarn add axios

```js static
import axios from 'axios'
import GitHubRepository from './service/GitHubRepository';
const gitHubRepository = new GitHubRepository(); 
```
#### getUser() | async
Busca usuário na API do GitHub.
```js static
const username = 'example';
const user = await gitHubRepository.getUser(username);
```
#### getReposByUser() | async
Busca os repositórios do usuário na API do GitHub.
```js static
const username = 'example';
const user = await gitHubRepository.getReposByUser(username);
```