import React from 'react';
import { BrowserRouter, Router, Switch, Route, Link } from 'react-router-dom';
import CourseBlock from '../../components/courseBlock/courseBlock.component';
import Course from '../course/course.page';

import './group.css';

class Group extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: JSON.parse(this.props.courses)
        };
    }

    render() {
        let courseBlocks = [], courses = [];
        for (let course in this.state.courses) {
            let courseBlockComponent = <CourseBlock name={this.state.courses[course].course} average={this.state.courses[course].average} />;
            courseBlocks.push(
                <Link to={`/${this.state.courses[course].course}`} className='mt-3 mr-2 pl-0'>
                    {courseBlockComponent}
                </Link>
            );
            courses.push(
                <Route exact path={`/${this.state.courses[course].course}`}>
                    <Course name={this.state.courses[course].course} average={this.state.courses[course].average} />
                </Route>
            );
            console.log(courseBlocks);
        }
        //for loop here to create different Route paths for each course group
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        {courses}
                        <Route path='/'>
                            <h1>{this.props.name}</h1>
                            <div className='courses-wrapper'>{courseBlocks}</div>
                        </Route>
                    </Switch>
                </BrowserRouter>
                
            </div>
        );
    }
}

export default Group;