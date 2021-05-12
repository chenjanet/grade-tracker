import React from 'react';
import './components.css';

export default function groupBlock(props) {
    let courseNames = [];
    let courseList = JSON.parse(props.courses), i = 0;
    for (let course in courseList) {
        courseNames.push(<div key={i}>{courseList[course]}</div>);
        i++;
    }
    return (
        <div className='card groupBlock pb-3 pt-2 pl-2 pr-2'>
            <h2>{props.name}</h2>
            {courseNames}
        </div>
    );
}