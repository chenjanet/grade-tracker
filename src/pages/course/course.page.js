import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Course extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <div>
                <Router>
                </Router>
                {this.props.name}
            </div>
        );
    }
}

export default Course;