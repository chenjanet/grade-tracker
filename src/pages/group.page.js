import React from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

import LogoutButton from '../components/logoutButton.component';
import CourseBlock from '../components/courseBlock.component';
import Course from './course.page';

import './pages.css';

class Group extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: this.props.courses,
            average: 0,
            modalShow: false
        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/courses/${this.props.name}`)
        .then(res => {
            let courseData = res.data;
            let groupAverage = 0, weightTotal = 0, groupCourses = [];
            for (let course in courseData) {
                groupCourses.push(
                    { course: courseData[course].coursename, cid: courseData[course]._id, average: courseData[course].average }
                );
                groupAverage += courseData[course].average * courseData[course].weight;
                weightTotal += courseData[course].weight;
            }
            groupAverage = (weightTotal !== 0) ? groupAverage / weightTotal : 0;
            this.setState({
                average: groupAverage,
                courses: groupCourses
            });
        });
        
    }

    handleOpenModal() {
        this.setState({
            modalShow: true
        });
    }

    handleCloseModal() {
        this.setState({
            modalShow: false
        });
    }

    render() {
        let courseBlocks = [], courses = [], i = 0;
        for (let course in this.state.courses) {
            let courseBlockComponent = <CourseBlock name={this.state.courses[course].course} average={this.state.courses[course].average} />;
            courseBlocks.push(
                <Link to={`/${this.state.courses[course].course}`} className='mt-3 pl-0 courseBlockLink' key={i}>
                    {courseBlockComponent}
                </Link>
            );
            courses.push(
                <Route exact path={`/${this.state.courses[course].course}`} key={i}>
                    <Course name={this.state.courses[course].course} average={this.state.courses[course].average} id={this.state.courses[course].cid} />
                </Route>
            );
            i++;
        }

        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        {courses}
                        <Route path='/'>
                            <LogoutButton />
                            <h1>{this.props.name}</h1>
                            <div>Overall average:&nbsp;{this.state.average}</div>
                            <div className='courses-wrapper'>{courseBlocks}</div>
                        </Route>
                    </Switch>
                </BrowserRouter>
                <Modal show={this.state.modalShow} onHide={this.handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add new term</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label htmlFor='groupName'>New term name</label>
                        <input type='text' className='form-control' id='groupName' placeholder='Enter term name' />
                    </Modal.Body>
                    <Modal.Footer>
                        <button className='secondary' onClick={this.handleCloseModal}>Cancel</button>
                        <button onClick={this.addNewGroup}>Save</button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Group;