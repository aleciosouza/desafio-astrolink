import React from 'react';
import '../card.css'

class CardUser extends React.Component {

    render() {
        const {
            login,
            avatar_url,
            followers,
            following,
            bio,
            email
        } = this.props.user;

        const imgAlt = `Foto de perfil do usuário ${login}`

        return (
            <div className="card elevation-z4">
                <img src={avatar_url} alt={imgAlt} className="card-header-img" />
                <div className="card-header">
                    <div className="profile-user">
                        <h1>{login}</h1>
                        <p>{email}</p>
                    </div>
                    <p className="profile-bio">
                        <b>Bio</b><br />
                        {bio}
                    </p>
                </div>
                <div className="card-body">
                    <ul className="profile-status">
                        <li><b>Seguidores</b> {followers}</li>
                        <li><b>Seguindo</b> {following}</li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default CardUser
