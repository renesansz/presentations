import React from 'react';
import ReactDOM from 'react-dom';
import ChatBoxCard from './ChatBoxCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatBoxCard author="Test User" message="This works!" />, div);
});
