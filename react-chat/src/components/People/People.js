import React from 'react';

import './People.css';

class People extends React.Component {
    render() {
        const onlineList = this.props.people.map((person) =>
            <li key={ person.id }>{ person.username }</li>
        );

        return (
            <div className="People">
                <div className="content">
                    <h4>People ({ this.props.people.length })</h4>
                    <ul className="online">
                        { onlineList }
                    </ul>
                </div>
            </div>
        );
    };
}

export default People;
