import React, {Component} from 'react';

import './UserForm.css';

class UserForm extends Component {
    state = {
        user: ''
    }

    render() {
        return (
            <div className="user-form">
                <label htmlFor="userName"> Username: </label>
                <input value={this.state.user} onChange={this.handleChange} name="userName"/>
            </div>
        )
    }

    handleChange = (event) => {
        event.preventDefault()

        if (event.target.value.length > 10) {
            return this.setState({
                user: ''
            })
        }

        this.setState({
            user: event.target.value
        })
    }
}

export default UserForm
