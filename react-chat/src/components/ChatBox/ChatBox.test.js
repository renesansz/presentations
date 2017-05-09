import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import ChatBox from './ChatBox';

describe('<Chatbox />', () => {
    let chatbox;

    beforeEach(() => {
        const props = {
            user: 'test',
            messages: [
                {
                    id: 1,
                    author: 'Tester1',
                    content: 'Hello World!'
                },
                {
                    id: 2,
                    author: 'Tester2',
                    content: 'Hi!'
                },
                {
                    id: 3,
                    author: 'Tester1',
                    content: 'Hello!'
                }
            ],
            sendMessage: () => {}
        };

        chatbox = shallow(<ChatBox {...props} />);
    });

    // DOM
    it('should render <ChatBoxControls /> component', () => {
        expect(chatbox.find('ChatBoxControls')).toHaveLength(1);
    });
    it('should render <ChatBoxCard /> components', () => {
        expect(chatbox.find('ChatBoxCard').length).toBeGreaterThan(0);
    });
});
