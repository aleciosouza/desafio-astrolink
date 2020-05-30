import React from 'react';
import './App.css';
import UserSearchForm from './components/user-search-form/user-search-form'
import CardUser from './components/card/card-user/card-user'
import UserRepoList from './components/user-repo-list/userRepoList'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
  }

  onUserChanged = (userPromise) => {
    userPromise
      .then(user => {
        console.log(user);
        this.setState({ user });
      })
      .catch(e => {
        console.log(e);
        this.setState({ user: null });
      });
  }

  render() {

    const cardUser = this.state.user ?
      (<CardUser user={this.state.user} />) :
      (<p>Nenhum usuário</p>)

      const userRepoList = this.state.user && <UserRepoList repos={this.state.user.repos} />

    return (
      <div className="container">
        <header className="container navbar-search">
          <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,200&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <UserSearchForm onUserChanged={this.onUserChanged} />
        </header>
        <main className="container">
          {cardUser}
          {userRepoList}
        </main>
      </div>
    )
  }
}

export default App;
