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
                <img src={avatar_url} alt={imgAlt} className="header-img elevation-z4
                " />
                <div className="profile-header">
                    <div className="profile-user">
                        <h1>{login}</h1>
                        {email && <p>{email}</p>}
                    </div>
                    <p className="profile-bio">
                        {/* <b>Bio</b><br /> */}
                        {bio}
                    </p>
                </div>
                <ul className="profile-status">
                    <li><b>Seguidores</b> {followers}</li>
                    <li><b>Seguindo</b> {following}</li>
                </ul>
            </div>
        )
    }

}

export default CardUser
