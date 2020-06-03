# CardRepo
Renderiza um card com as informações do repositório.

```js static
import CardRepo from './components/card/CardRepo';
//Lista de repositórios
const repo = { id, name, description, stargazers_count, language, svn_url }
```
```jsx
<CardRepo repo={repo} />
```