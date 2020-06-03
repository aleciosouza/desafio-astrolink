# GitHubService
Reponsável por tratar as repostas vindas do Repository e filtrar os dados desnecessários
```js static
import GitHubService from './service/gitHubService';
const gitHubService = new GitHubService(); 
```
#### getUser() | async
Busca por usuário Usuario.
```js static
const username = 'example';
const user = await gitHubService.getUser(username);
```
#### getReposByUser() | async
Busca por repositórios de um usuário.
```js static
const username = 'example';
const user = await gitHubService.getReposByUser(username);
```
#### validateUsername()
 Valida o nome de usuário para corresponder às regras de nome do GitHub:
 - O nome de usuário deve ter entre 1 e 39 caracteres
 - Não pode conter outros caracteres especiais além de hífem
 - Não pode começar com hífem.
 
 ```js static
const error = gitHubService.validateUsername('example'); //null
const error = gitHubService.validateUsername('-example'); //'Mensagem de erro'
```