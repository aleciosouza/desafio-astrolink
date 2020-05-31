import React from 'react'
import RepoList from '../RepoList'
import FloatingButton from '../../utils/button/floating-button/FloatingButton'
import './repo-list-controller.css';


class RepoListController extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            repos: props.repos,
            filter: {
                order: 'asc',
                icon: 'arrow_upward',
                text: 'Mais estrelas'
            }
        }
    }

    changeOrdenation = () => {
        const { filter, repos } = this.state;

        const newFilter = (filter.order === 'asc') ?
            { order: 'desc', icon: 'arrow_downward', text: 'Menos estrelas' } :
            { order: 'asc', icon: 'arrow_upward', text: 'Mais estrelas' };

        const newRepos = (newFilter.order === 'asc') ?
            ([...repos].sort((a, b) => (a.stargazers_count < b.stargazers_count) ? 1 : -1)) :
            ([...repos].sort((a, b) => (a.stargazers_count > b.stargazers_count) ? 1 : -1));

        this.setState({
            filter: newFilter,
            repos: newRepos
        });
    }

    render() {
        const { repos, filter } = this.state;

        return (
            <div className="container repo-list">
                <div className="repo-list-header">
                    <h1>Repositórios</h1>
                    <FloatingButton icon={filter.icon} text={filter.text} onClick={this.changeOrdenation} />
                </div>
                <RepoList repos={repos} />
            </div>
        )
    }
}

export default RepoListController
