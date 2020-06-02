import React from 'react'
import RepoList from '../RepoList'
import FloatingButton from '../../utils/button/floating-button/FloatingButton'
import './repo-list-controller.css';

class RepoListController extends React.PureComponent {
    render() {
        const { repos, filter, changeOrdenationHandler } = this.props;
        return (
            <div className="container repo-list" data-testid="list-controller">
                <div className="repo-list-header">
                    <h1>Repositórios</h1>
                    {repos && <FloatingButton icon={filter.icon} text={filter.text} onClickHandler={changeOrdenationHandler} />}
                </div>
                {repos && <RepoList repos={repos} />}
                {!repos && <p data-testid="no-repo">Nenhum Repositório</p>}
            </div>
        )
    }
}

export default RepoListController