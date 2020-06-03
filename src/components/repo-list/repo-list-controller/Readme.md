# RepoListController
Renderiza uma `RepoList` e dispara evento para reordenação dos cards.

```js static
import RepoListController from './components/repo-list/repo-list-controller/RepoListController';
//Lista de repositórios
const repos = [
    { id, name, description, stargazers_count, language, svn_url },
    ...
];
//Objeto de filtro
const filter: { order, icon, text };
//Função callBack de reordenação da lista
const changeOrdenationHandlerCB = () => {
    //Lógica de reodenação
}
```
```jsx
<RepoListController repos={repos} filter={filter} changeOrdenationHandler={changeOrdenationHandlerCB} />
```