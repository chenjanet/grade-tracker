import React from 'react';

import '../pages.css';

class Course extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
            </div>
        );
    }
}

export default Course;