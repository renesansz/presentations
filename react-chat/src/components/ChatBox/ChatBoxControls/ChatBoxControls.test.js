import React from 'react';
import ReactDOM from 'react-dom';
import ChatBoxControls from './ChatBoxControls';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatBoxControls />, div);
});
