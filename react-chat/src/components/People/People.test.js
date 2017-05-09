import React from 'react';
import ReactDOM from 'react-dom';
import People from './People';
import { shallow } from 'enzyme';

describe('<People />', () => {
    let props;

    beforeEach(() => {
        props = {
            people: []
        };
    });

    // DOM
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<People {...props} />, div);
    });
    it('should display the list of people', () => {
        props.people = [
            { id: 1, username: 'User1' },
            { id: 2, username: 'User2' },
            { id: 3, username: 'User3' }
        ];

        const component = shallow(
            <People {...props} />
        );

        expect(component.find('.online li')).toHaveLength(props.people.length);
    });
});
