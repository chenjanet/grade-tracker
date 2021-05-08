import axios from 'axios';
import React from 'react';

import '../pages.css';

class Course extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            average: this.props.average,
            grades: []
        };
    }

    componentDidMount() {
        let id = this.props.id;
        axios.get(`http://localhost:5000/courses/${id}`)
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

    render() {
        let tableContents = [];
        for (let grade in this.state.grades) {
            tableContents.push();
        }
        let gradeTable = (<table className='gradeTable'>{tableContents}</table>);
        return (
            <div>
                <h1>{this.props.name}</h1>
                {gradeTable}
            </div>
        );
    }
}

export default Course;