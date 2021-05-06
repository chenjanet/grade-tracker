import React from 'react';
import Header from '../header.component';
import './groupBlock.css';

export default function groupBlock(props) {
    let courseNames = [];
    let courseList = JSON.parse(props.courses);
    for (let course in courseList) {
        courseNames.push(<div>{courseList[course].course}</div>);
    }
    return (
        <div className='groupBlock-wrapper'>
            <div className='card groupBlock mt-3 pb-3 col-3'>
                <h2>{props.name}</h2>
                {courseNames}
            </div>
        </div>
    );
}