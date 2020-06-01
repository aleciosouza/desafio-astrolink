import React from 'react'
import RepoList from '../RepoList'
import FloatingButton from '../../utils/button/floating-button/FloatingButton'
import './repo-list-controller.css';


class RepoListController extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            repos: [...props.repos],
            filter: {
                order: 'asc',
                icon: 'arrow_upward',
                text: 'Mais estrelas'
            }
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (JSON.stringify(props.repos) !== JSON.stringify(props.repos)) {
            return {
                repos: [...props.repos]
            };
        }

        return null;
    }

    changeOrdenation = () => {
        this.setState(prevState => {

            const { filter, repos } = prevState;

            const newFilter = (filter.order === 'asc') ?
                { order: 'desc', icon: 'arrow_downward', text: 'Menos estrelas' } :
                { order: 'asc', icon: 'arrow_upward', text: 'Mais estrelas' };

            const newRepos = (newFilter.order === 'asc') ?
                ([...repos].sort((a, b) => (a.stargazers_count < b.stargazers_count) ? 1 : -1)) :
                ([...repos].sort((a, b) => (a.stargazers_count > b.stargazers_count) ? 1 : -1));

            console.log(`${filter.order} -> ${newFilter.order} | ${repos[0].id} -> ${newRepos[0].id}`);

            return { filter: newFilter, repos: newRepos }
        });
    }

    render() {
        const { repos, filter } = this.state;
        return (
            <div className="container repo-list">
                <div className="repo-list-header">
                    <h1>Repositórios</h1>
                    <FloatingButton icon={filter.icon} text={filter.text} onClickHandler={this.changeOrdenation} />
                </div>
                <RepoList repos={repos} />
            </div>
        )
    }
}

export default RepoListController
