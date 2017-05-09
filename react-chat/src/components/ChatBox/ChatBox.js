import React from 'react';

import ChatBoxControls from './ChatBoxControls/ChatBoxControls';
import ChatBoxCard from './ChatBoxCard/ChatBoxCard';

import './ChatBox.css';

class ChatBox extends React.Component {
    render() {
        const messages = this.props.messages.map((message) =>
            <ChatBoxCard key={ message.id }
                         author={ message.author }
                         isUserAuthor={ (this.props.user === message.author) ? true : false }
                         message={ message.content } />
        );
        
        return (
            <div className="ChatBox">
                <div className="content">
                    <h4>Chat Box</h4>
                    <div className="messages">
                        { messages }
                    </div>
                    <ChatBoxControls sendMessage={ this.props.sendMessage }
                                     isLoggedIn={ (this.props.user) ? true : false } />
                </div>
            </div>
        );
    };
}

export default ChatBox;
