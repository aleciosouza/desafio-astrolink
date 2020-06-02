import React from 'react';
import './App.css';
import UserSearchForm from './components/user-search-form/UserSearchForm'
import CardUser from './components/card/card-user/CardUser'
import RepoListController from './components/repo-list/repo-list-controller/RepoListController'


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      user: null,
      repos: null,
      filter: {
        order: 'asc',
        icon: 'arrow_upward',
        text: 'Mais estrelas'
      }
    }
  }

  onUserChanged = (gitHubPromise) => {
    gitHubPromise
      .then(response => {
        this.setState({
          user: response.user,
          repos: [...response.repos]
        });
      })
      .catch(e => {
        this.setState({ user: null, repos: null });
      });
  }

  changeOrdenation = () => {
    const { filter, repos } = this.state;

    const newFilter = (filter.order === 'asc') ?
      { order: 'desc', icon: 'arrow_downward', text: 'Menos estrelas' } :
      { order: 'asc', icon: 'arrow_upward', text: 'Mais estrelas' };

    const newRepos = (newFilter.order === 'asc') ?
      ([...repos].sort((a, b) => (a.stargazers_count < b.stargazers_count) ? 1 : -1)) :
      ([...repos].sort((a, b) => (a.stargazers_count > b.stargazers_count) ? 1 : -1));
    this.setState({ filter: newFilter, repos: newRepos });
  }


  render() {
    const { user, repos, filter } = this.state;

    return (
      <div className="container">
        <header className="container navbar-search">
          <UserSearchForm onUserChanged={this.onUserChanged} />
          {user && <CardUser user={user} />}
        </header>
        <main className="container elevation-z8">
          <RepoListController repos={repos} filter={filter} changeOrdenationHandler={this.changeOrdenation} />
        </main>
      </div>
    )
  }
}

export default App;
