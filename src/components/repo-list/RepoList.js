import React from 'react'
import CardRepo from '../card/card-repo/CardRepo'

export default class RepoList extends React.Component {
    render() {
        const { repos } = this.props;

        const cardRepoList = repos && (
            repos.map(repo => {
                return <CardRepo key={repo.id} repo={repo} />;
            })
        )

        return (
            <React.Fragment>
                {cardRepoList}
            </React.Fragment>
        )
    }
}
