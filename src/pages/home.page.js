import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
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