import React from 'react';

import './ChatBoxCard.css';

class ChatBoxCard extends React.Component {
    render() {
        let className = 'ChatBoxCard';

        if (this.props.isUserAuthor)
            className += ' me';
        else if (this.props.author === 'System')
            className += ' system';

        return (
            <div className={ className }>
                <div className="message">
                    <strong className="user">{ (this.props.isUserAuthor) ? 'You' : this.props.author }</strong>: { this.props.message }
                </div>
            </div>
        );
    };
}

export default ChatBoxCard;
