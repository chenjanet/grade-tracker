import React from 'react';
import './components.css';

class GradeTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grades: []
        }
    }

    componentDidMount() {
        let courseid = this.props.courseid;
        
    }

    render() {
        return(
            <div className='gradeTable-wrapper'>
                Grade table will go here
            </div>
        );
    }
}

export default GradeTable;