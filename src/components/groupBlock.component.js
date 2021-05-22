import React from 'react';
import DeleteButton from './deleteButton.component';
import './components.css';

export default function groupBlock({ name, groupId, courses, deleteComponent }) {
    let courseNames = [];
    let courseList = JSON.parse(courses), i = 0;
    for (let course in courseList) {
        courseNames.push(<div key={i}>{courseList[course]}</div>);
        i++;
    }
    return (
        <div className='card groupBlock pb-3 pt-2 pl-2 pr-2'>
            <h2><DeleteButton deleteComponent={deleteComponent} deleteId={groupId}/> {name}</h2>
            {courseNames}
        </div>
    );
}