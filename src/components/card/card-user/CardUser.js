import React from 'react';
import './card-user.css'

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
            <div className="container profile-container">
                {avatar_url && <img src={avatar_url} alt={imgAlt} data-testid="user-img" className="header-img elevation-z4" />}
                <div className="profile-header">
                    <div className="profile-user">
                        <h1>{login}</h1>
                        {email && <p aria-label="user-email">{email}</p>}
                    </div>
                    {bio && <p className="profile-bio" aria-label="user-bio">{bio}</p>}
                </div>
                <ul className="profile-status">
                    <li><b>Seguidores</b> <span aria-label="user-followers">{followers ? followers : 0}</span></li>
                    <li><b>Seguindo</b> <span aria-label="user-following">{following ? following : 0}</span></li>
                </ul>
            </div>
        )
    }

}

export default CardUser
