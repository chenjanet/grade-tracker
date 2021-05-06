import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Group extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: JSON.parse(this.props.courses)
        };
    }

    render() {
        //for loop here to create different Route paths for each course group
        return (
            <div>
                <Router>
                </Router>
                <h1>{this.props.name}</h1>
            </div>
        );
    }
}

export default Group;