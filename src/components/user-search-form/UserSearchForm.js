import React from 'react'
import './user-search-form.css'
import GitHubService from '../../service/githubService'

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
            <div className="form-container" data-testid="form-container">
                <form onSubmit={this.onSubmitHandler}>
                    <div className="input-group">
                        <input name="userSearch" placeholder="Usuário" className="form-input"
                            minLength="3" maxLength="39" data-testid="user-search-input"
                            onChange={this.onChangeHandler} />
                        <button type="submit" className="mat-icon" data-testid="user-search-bt"
                            onClick={this.onSubmitHandler}>
                            search
                        </button>
                    </div>
                    {error && <small className="error" data-testid="search-error">{error}</small>}
                </form>
            </div>
        )
    }
}

export default UserSearchForm
