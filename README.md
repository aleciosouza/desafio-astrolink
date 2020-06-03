# Desafio Astrolink

### `yarn start`

iniciar no ambiente de desenvolvimento

### `yarn test`

Iniciar todos os testes

## App.js
Componente principal do projeto, armazena os dados recebidos da API em seu state e reordena lista de repositórios.
```js static
    import App from './App';
```
```jsx
<App />
```
#### onUserChanged()
Função de callBack disparada pelo component `UserSearchForm` sempre que uma nova busca por usuário for feita
```js static
onUserChanged = (userSearchPromise) => {
    const { 
        user, // Usuário
        repos // Lista de repositórios
    } = await userSearchPromise;
}
```
#### changeOrdenation()
Função de callBack disparada pelo component `RepoListController` sempre que o botão para alterar a ordenação da lista de repositórios for clicado.
```js static
changeOrdenationHandlerCB = () => {
    //Lógica de reodenação da lista
}
```
