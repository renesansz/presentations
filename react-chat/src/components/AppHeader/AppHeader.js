import React, { Component } from 'react';

import logo from './img/logo.svg';

import './AppHeader.css';

class AppHeader extends Component {
    render() {
        return (
            <div className="App-header">
                <img src={ logo } className="App-logo" alt="logo" />
                <h2>React Chat</h2>
            </div>
        );
    }
}

export default AppHeader;
