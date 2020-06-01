import React from 'react';
import './App.css';
import UserSearchForm from './components/user-search-form/UserSearchForm'
import CardUser from './components/card/card-user/CardUser'
import RepoListController from './components/repo-list/repo-list-controller/RepoListController'

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
        this.setState({ user });
      })
      .catch(e => {
        console.log(e);
        this.setState({ user: null });
      });
  }

  render() {
    const { user } = this.state;

    return (
      <div className="container">
        <header className="container navbar-search">
          <UserSearchForm onUserChanged={this.onUserChanged} />
          {user && <CardUser user={user} />}
        </header>
        <main className="container elevation-z8">
          {user && <RepoListController repos={user.repos} />}
        </main>
      </div>
    )
  }
}

export default App;
