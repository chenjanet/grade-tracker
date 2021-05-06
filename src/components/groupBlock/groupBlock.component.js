import React from 'react';
import './groupBlock.css';

export default function groupBlock(props) {
    let courseNames = [];
    let courseList = JSON.parse(props.courses);
    for (let course in courseList) {
        courseNames.push(<div>{courseList[course].course}</div>);
    }
    return (
        <div className='card groupBlock pb-3 pt-2 pl-2 pr-2'>
            <h2>{props.name}</h2>
            {courseNames}
        </div>
    );
}