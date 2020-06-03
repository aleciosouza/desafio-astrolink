# UserSearchForm
Renderiza formulário de busca de usuário na API do Github, dispara uma função de callBack com o resultado da busca

```js static
import UserSearchForm from './components/user-search-form/UserSearchForm';
//Função callBack de reordenação da lista
const onUserChangedCB = async function(userSearchPromise) {
    const { 
        user, // Usuário
        repos // Lista de repositórios
    } = await userSearchPromise;
}
```
```jsx
<UserSearchForm onUserChanged={onUserChangedCB} />
```