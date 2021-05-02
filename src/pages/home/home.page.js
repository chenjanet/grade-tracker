import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groups: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/courses')
        //get all the groups here and add them to the state
    }

    render() {
        //for loop here to create different Route paths for each course group
        return (
            <div>
                <Router>

                </Router>
                Hello World!
            </div>
        );
    }
}

export default Home;