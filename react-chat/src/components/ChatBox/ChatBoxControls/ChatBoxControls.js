import React from 'react';

import './ChatBoxControls.css';

class ChatBoxControls extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            message: ''
        };
    }

    renderButton() {
        if (this.props.isLoggedIn) {
            return <button className="btn btn-default btn-lg" type="submit">Send Message</button>;
        }
        return <button className="btn btn-default btn-lg" type="submit">Join Chat</button>;
    }

    handleChange(e) {
        const name = e.target.name;

        this.setState({
            [name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.sendMessage(this.state.message);

        e.currentTarget.querySelector('textarea').value = '';
    }

    render() {
        const textPlaceholder = (this.props.isLoggedIn) ? 'Enter Message' : 'Enter Name';

        return (
            <div className="ChatBoxControls">
                <form onSubmit={ this.handleSubmit }>
                    <textarea name="message"
                              className="form-control"
                              placeholder={ textPlaceholder }
                              onChange={ this.handleChange }>
                    </textarea>
                    { this.renderButton() }
                </form>
            </div>
        );
    };
}

export default ChatBoxControls;
