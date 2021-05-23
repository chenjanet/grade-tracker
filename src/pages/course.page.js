import axios from 'axios';
import React from 'react';
import LogoutButton from '../components/logoutButton.component';
import BackButton from '../components/backButton.component';
import GradeTable from '../components/gradeTable.component';

import './pages.css';

class Course extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grades: [],
            average: 0
        };
        this.addGrade = this.addGrade.bind(this);
    }

    componentDidMount() {
        let courseId = this.props.courseId;
        axios.get(`http://localhost:5000/courses/${courseId}`)
            .then(res => {
                let currGrades = [...this.state.grades];
                let courseAverage = 0;
                for (let grade in res.data.grades) {
                    currGrades.push(res.data.grades[grade]);
                    courseAverage += res.data.grades[grade].weightedGrade;
                }
                this.setState({
                    grades: currGrades,
                    average: courseAverage
                });
            })
            .catch(err => console.error('Error: ' + err));
    }

    addGrade(grade, weight) {

    }

    render() {
        console.log(this.state.grades);
        return (
            <div>
                <BackButton />
                <LogoutButton />
                <h1>{this.props.courseName}</h1>
                <div>Course average:&nbsp;{this.state.average}</div>
                <GradeTable data={this.state.grades} addGrade={this.addGrade} />
            </div>
        );
    }
}

export default Course;