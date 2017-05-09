import React from 'react';
import ReactDOM from 'react-dom';

import { mount } from 'enzyme';

import App from './App';

describe('<App />', () => {

  describe('constructor()', () => {
    it('should have an initial empty array value for `messages` state', () => {
      const component = mount(<App />);
      expect(component.state().messages).toBe([]);
    });
    it('should have an initial empty array value for `people` state', () => {
      const component = mount(<App />);
      expect(component.state().people).toBe([]);
    });
    it('should have an initial null value for `user` state', () => {
      const component = mount(<App />);
      expect(component.state().messages).toBe(null);
    });
    it('should have an initial false boolean value for `isLoggedIn` state', () => {
      const component = mount(<App />);
      expect(component.state().isLoggedIn).toBe(false);
    });
  });

});
