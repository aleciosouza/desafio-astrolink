import React from 'react';
import './card-repo.css'

class CardRepo extends React.Component {

    render() {
        const { name, description, stargazers_count, language, svn_url } = this.props.repo;

        return (
            <div className="card card-repo elevation-z4" data-testid="card-repo">
                <div className="card-header repo-header">
                    <h1>
                        <a href={svn_url ? svn_url : '#'} target="_blank" rel="noopener noreferrer" data-testid="repo-url" >
                            {name}
                            <i className="mat-icon">open_in_new</i>
                        </a>
                    </h1>
                    {description && <p aria-label="repo-desc">{description}</p>}
                </div>
                <div className="card-body">
                    <ul className="repo-info">
                        <li className="repo-info-item">
                            <i className="mat-icon">star</i>
                            <span aria-label="repo-stars">{stargazers_count ? stargazers_count : 0}</span>
                        </li>
                        <li className="repo-info-item">
                            <i className="mat-icon">code</i>
                            <span aria-label="repo-lang">{language ? language : 'Não informado'}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default CardRepo
