# FloatingButton
Renderiza um botão flutuante com ícone que dispara uma função de callBack ao clicar.

Utiliza a fonte Material Icons para criar icones
```jsx
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
```

```js static
import FloatingButton from './utils/button/floating-button';
// Icone
const iconProp = 'update'
// Texto do botão
const textProp = 'Atualizar'
//Função callBack do evento de click
const onUserChangedCB = async function(event) {
    //[...]
}
```

```jsx
<FloatingButton icon={iconProp} text={textProp} onClickHandler={onClickHandlerCB} />
```
