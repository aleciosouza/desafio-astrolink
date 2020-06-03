# RepoList
Renderiza uma lista de `CardRepo`

```js static
import RepoList from './components/repo-list/RepoList';
//Lista de repositórios
const repos = [
    { id, name, description, stargazers_count, language, svn_url },
    ...
];
```
```jsx
<RepoList repos={repos} />
```