import React from 'react'
import './user-search-form.css'
import GitHubService from '../../service/GithubService'

class UserSearchForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            user: null,
            error: null
        }
    }

    componentDidMount() {
        this.service = new GitHubService();
    }

    onChangeHandler = (event) => {
        const { value } = event.target;
        this.setState({ username: value });
    }

    onSubmitHandler = (event) => {
        const { username } = this.state;
        const error = this.service.validateUsername(username);

        if (!error) {
            this.props.onUserChanged(this.service.getUser(username));
        }

        this.setState({ error: error });

        event.preventDefault();
    }

    render() {
        const { error } = this.state;

        return (
            <div className="form-container">
                <form onSubmit={this.onSubmitHandler}>
                    <div className="input-group">
                        <input name="userSearch" placeholder="Usuário" className="form-input"
                            minLength="3" maxLength="39"
                            onChange={this.onChangeHandler} />
                        <button type="submit" className="mat-icon" onClick={this.onSubmitHandler}>
                            search
                        </button>
                    </div>
                    {error && <small className="error">{error}</small>}
                </form>
            </div>
        )
    }
}

export default UserSearchForm
