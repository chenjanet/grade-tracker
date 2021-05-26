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
            dirtyFlag: 0,
            weight: 0
        };
        this.addGrade = this.addGrade.bind(this);
        this.dataUpdated = this.dataUpdated.bind(this);
        this.deleteData = this.deleteData.bind(this);
        this.saveGrades = this.saveGrades.bind(this);
    }

    componentDidMount() {
        let courseId = this.props.courseId;
        axios.get(`http://localhost:5000/courses/${courseId}`)
            .then(res => {
                let courseWeight = res.data.weight;
                let currGrades = [...this.state.grades];
                let courseAverage = 0;
                for (let grade in res.data.grades) {
                    currGrades.push(res.data.grades[grade]);
                    courseAverage += res.data.grades[grade].grade / 100 * res.data.grades[grade].weight;
                }
                this.setState({
                    grades: currGrades,
                    average: courseAverage,
                    weight: courseWeight
                });
            })
            .catch(err => console.error('Error: ' + err));
    }

    addGrade() {
        let currGrades = [...this.state.grades];
        currGrades.push({
            'grade': 0,
            'weight': 0
        });
        this.setState({
            grades: currGrades,
            dirtyFlag: 1
        });
    }

    dataUpdated(index, id, val) {
        let currGrades = [...this.state.grades];
        currGrades[index][id] = Number(val);
        this.setState({
            dirtyFlag: 1,
            grades: currGrades
        });
    }

    deleteData(index) {
        let currGrades = [...this.state.grades];
        currGrades.splice(index, 1);
        this.setState({
            dirtyFlag: 1,
            grades: currGrades
        });
    }

    saveGrades() {
        let userId = localStorage.getItem('user');
        let groupId = this.props.groupId;
        let courseName = this.props.courseName;
        let grades = [];
        let average = 0;
        for (let i = 0; i < this.state.grades.length; i++) {
            if (this.state.grades[i].grade === 0 && this.state.grades[i].weight === 0) {
                continue;
            }
            grades.push(this.state.grades[i]);
            average += this.state.grades[i].grade / 100 * this.state.grades[i].weight;
        }
        let weight = this.state.weight;
        let postData = {
            userId,
            groupId,
            courseName,
            grades,
            average,
            weight
        }
        axios.post(`http://localhost:5000/courses/update/${this.props.courseId}`, postData)
            .then(() => {
                this.setState({
                    dirtyFlag: 0
                });
            })
            .catch(err => console.error('Error: ' + err));
    }

    render() {
        return (
            <div>
                <BackButton />
                <LogoutButton />
                <h1>{this.props.courseName}</h1>
                <GradeTable data={this.state.grades} dataUpdated={this.dataUpdated} deleteData={this.deleteData} />
                <NewGradeAdder addGradeFunction={this.addGrade} />
                <SaveButton showButton={this.state.dirtyFlag} onClick={this.saveGrades}/>
            </div>
        );
    }
}

export default Course;