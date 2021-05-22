import axios from 'axios';
import React from 'react';
import LogoutButton from '../components/logoutButton.component';
import GradeTable from '../components/gradeTable.component';

import './pages.css';

class Course extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            average: this.props.average
        };
        this.addGrade = this.addGrade.bind(this);
    }

    componentDidMount() {
        let courseId = this.props.courseId;
        axios.get(`http://localhost:5000/courses/${courseId}`)
            .then(res => {
                let currGrades = this.state.grades;
                for (let grade in res.data.grades) {
                    currGrades.push(res.data.grades[grade]);
                }
                this.setState({
                    grades: currGrades
                });
            })
            .catch(err => console.error('Error: ' + err));
    }

    addGrade(grade, weight) {

    }

    render() {
        return (
            <div>
                <LogoutButton />
                <h1>{this.props.name}</h1>
                <div>Course average:&nbsp;{this.state.average}</div>
                <GradeTable grades={this.state.grades} addGrade={this.addGrade} />
            </div>
        );
    }
}

export default Course;