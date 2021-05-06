import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groups: {}
        };
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/courses`)
            .then(res => {
                let courseData = res.data;
                let username = localStorage.getItem('user');
                let courseGroups = {};
                for (let i = 0; i < courseData.length; i++) {
                    if (courseData[i].username != username) {
                        continue;
                    }
                    if (!courseGroups[courseData[i].groupname]) {
                        courseGroups[courseData[i].groupname] = [
                            { "course": courseData[i].coursename, "cid": courseData[i]._id }
                        ];
                    } else {
                        courseGroups[courseData[i].groupname].push(
                            { "course": courseData[i].coursename, "cid": courseData[i]._id }
                        );
                    }
                }
                this.setState({
                    groups: courseGroups
                });
            })
            .catch(err => console.log('Error: ' + err));
        //get all the groups here and add them to the state
    }

    render() {
        //for loop here to create different Route paths for each course group
        return (
            <div>
                <Router>

                </Router>
                {JSON.stringify(this.state.groups)}
            </div>
        );
    }
}

export default Home;