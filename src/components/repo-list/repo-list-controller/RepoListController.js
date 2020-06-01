import React from 'react'
import RepoList from '../RepoList'
import FloatingButton from '../../utils/button/floating-button/FloatingButton'
import './repo-list-controller.css';

class RepoListController extends React.PureComponent {
    render() {
        const { repos, filter, changeOrdenationHandler } = this.props;
        return (
            <div className="container repo-list">
                <div className="repo-list-header">
                    <h1>Repositórios</h1>
                    {repos && <FloatingButton icon={filter.icon} text={filter.text} onClickHandler={changeOrdenationHandler} />}
                </div>
                <RepoList repos={repos} />
            </div>
        )
    }
}

export default RepoListController