import React from 'react'
import './user-search-form.css'
import GitHubService from '../../service/GithubService'

class UserSearchForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            user: null,
        }
    }
    
    componentDidMount() {
        this.service = new GitHubService();
        this.setState({ username: 'andrew' }, () => {
            this.props.onUserChanged(this.service.getUser(this.state.username));
        });
    }

    onChangeHandler = (event) => {
        this.setState({username: event.target.value});
    }

    onSubmitHandler = (event) => {
        this.props.onUserChanged(this.service.getUser(this.state.username));
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onSubmitHandler}>
                <div className="input-group">
                    <input name="userSearch" placeholder="Usuário" className="form-input" 
                        onChange={this.onChangeHandler}/>
                    <button type="submit" className="mat-icon" onClick={this.onSubmitHandler}>
                        search
                    </button>
                </div>
            </form>
        )
    }
}

export default UserSearchForm
