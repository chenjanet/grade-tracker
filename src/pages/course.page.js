import axios from 'axios';
import React from 'react';
import LogoutButton from '../components/logoutButton.component';
import BackButton from '../components/backButton.component';
import GradeTable from '../components/gradeTable.component';
import NewGradeAdder from '../components/newGradeAdder.component';

import './pages.css';

function SaveButton({ showButton, onClick }) {
    if (showButton) {
        return (
            <button className='saveButton' style={{marginTop: 7.5}} onClick={onClick}>
                Save changes
            </button>
        );
    } else {
        return(
            <>
            </>
        );
    }
}

class Course extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grades: [],
            average: 0,
            dirtyFlag: 0
        };
        this.addGrade = this.addGrade.bind(this);
        this.dataUpdated = this.dataUpdated.bind(this);
        this.saveGrades = this.saveGrades.bind(this);
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

    addGrade() {
        let currGrades = [...this.state.grades];
        currGrades.push({
            'grade': 0,
            'weight': 0,
            'weightedGrade': 0
        });
        this.setState({
            grades: currGrades,
            dirtyFlag: 1
        });
    }

    dataUpdated() {
        this.setState({
            dirtyFlag: 1
        });
    }

    saveGrades() {

    }

    render() {
        return (
            <div>
                <BackButton />
                <LogoutButton />
                <h1>{this.props.courseName}</h1>
                <div>Course average:&nbsp;{this.state.average}</div>
                <GradeTable data={this.state.grades} dataUpdated={this.dataUpdated} />
                <NewGradeAdder addGradeFunction={this.addGrade} />
                <SaveButton showButton={this.state.dirtyFlag} onClick={this.saveGrades}/>
            </div>
        );
    }
}

export default Course;