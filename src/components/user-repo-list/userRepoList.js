import React from 'react'
import CardRepo from '../card/card-repo/card-repo'
import './user-repo-list.css';

class UserRepoList extends React.Component {

    render() {
        const { repos } = this.props;

        const repoList = repos && (
            repos.map(repo => {
                return (<CardRepo key={repo.id} repo={repo} />)
            })
        )


        return (
            <div className="container">
                {repoList}
            </div>
        )
    }
}

export default UserRepoList
