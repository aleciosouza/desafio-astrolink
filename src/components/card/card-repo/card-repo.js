import React from 'react';
import '../card.css'
import './card-repo.css'

class CardRepo extends React.Component {

    render() {
        const {
            id,
            name,
            description,
            stargazers_count,
            language,
        } = this.props.repo;


        return (
            <div className="card card-repo elevation-z4">
                <div className="card-header repo-header">
                    <h1>{name}</h1>
                    <p>{description}</p>
                </div>
                <div className="card-body">
                    <ul className="repo-info">
                        <li className="repo-info-item">
                            <i className="mat-icon">star</i>
                            <span>{stargazers_count}</span>
                        </li>
                        <li className="repo-info-item">
                            <i className="mat-icon">code</i>
                            <span>{language}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default CardRepo
