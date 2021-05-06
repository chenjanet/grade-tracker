import React from 'react';
import './groupBlock.css';

export default function groupBlock(props) {
    let courseNames = [];
    let courseList = JSON.parse(props.courses);
    for (let course in courseList) {
        courseNames.push(<div>{courseList[course].course}</div>);
    }
    return (
        <div className='card groupBlock mt-3 mr-2 pb-3 col-3'>
            <h2>{props.name}</h2>
            {courseNames}
        </div>
    );
}