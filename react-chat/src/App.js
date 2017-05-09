import React, { Component } from 'react';

import AppHeader from './components/AppHeader/AppHeader';
import ChatBox from './components/ChatBox/ChatBox';
import People from './components/People/People';

import WebsocketService from './services/WebsocketService';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.onMessageReceived = this.onMessageReceived.bind(this);
        this.sendMessage = this.sendMessage.bind(this);

        // Initialize websocket connection
        const websocket = new WebsocketService('ws://127.0.0.1:1337');

        websocket.connect(
            this.onMessageReceived,
            this.onConnectionSuccess
        );

        this.state = {
            websocket: websocket,
            messages: [],
            people: [],
            user: null,
            isLoggedIn: false
        };
    }

    onMessageReceived(response) {
        const json = JSON.parse(response.data);
        const data = json.data;
        let messages = [];
        let people = [];

        switch(json.type) {
            case WebsocketService.BROADCAST_TYPES.FETCH_HISTORY:
                messages = this.state.messages;

                data.forEach((message) => {
                    message.id = messages.length + 1;
                    messages.push(message);
                });

                this.setState({
                    messages: messages
                });
            break;
            case WebsocketService.BROADCAST_TYPES.ON_USER_CONNECT:
                people = this.state.people;

                data.forEach((person) => {
                    person.id = people.length + 1;
                    people.push(person);
                });

                this.setState({
                    people: people
                });
            break;
            case WebsocketService.BROADCAST_TYPES.ON_USER_DISCONNECT:
                people = [];

                data.people.forEach((person) => {
                    person.id = people.length + 1;
                    people.push(person);
                });

                this.setState({
                    people: people
                });
            break;
            case WebsocketService.BROADCAST_TYPES.ON_COLOR_ASSIGNED:
                people = this.state.people;

                const currentUser = {
                    id: people.length + 1,
                    username: this.state.user,
                    userColor: data
                };

                people.push(currentUser);

                this.setState({
                    people: people
                });
            break;
            case WebsocketService.BROADCAST_TYPES.ON_NEW_USER_CONNECT:
                messages = this.state.messages;
                people = this.state.people;
                
                data.user.id = people.length + 1;

                let systemMessage = {
                    id: messages.length + 1,
                    author: 'System',
                    content: `${ data.user.username } joined the conversation.`,
                    color: '#E3E3E3'
                };
                
                messages.push(systemMessage);
                people.push(data.user);

                this.setState({
                    messages: messages,
                    people: people,
                });
            break;
            case WebsocketService.BROADCAST_TYPES.ON_MESSAGE_RECEIVED:
                messages = this.state.messages;

                // Assign message id
                data.id = messages.length + 1;
                // Add to messages history
                messages.push(data);

                this.setState({
                    messages: messages
                });
            break;
            default:
        }
    }

    onConnectionSuccess(response) {
        console.log(`Successfully connected to ${response.target.url}`);
    }

    sendMessage(message) {
        if (!this.state.user) {
            let messages = this.state.messages;
            let systemMessage = {
                id: messages.length + 1,
                author: 'System',
                content: `You are known as ${ message }`,
                color: '#E3E3E3'
            };

            messages.push(systemMessage);

            this.setState({
                messages: messages,
                user: message,
                isLoggedIn: true
            });
        }

        this.state.websocket.sendMessage(message);
    }

    render() {
        return (
            <div className="App">
                <AppHeader />
                <div className="App-container">
                    <ChatBox user={ this.state.user }
                             messages={ this.state.messages }
                             sendMessage={ this.sendMessage } />
                    <People people={ this.state.people } />
                </div>
            </div>
        );
    }
}

export default App;
