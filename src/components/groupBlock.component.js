import React from 'react';
import SettingsButton from '../components/settingsButton.component';
import './components.css';

export default function groupBlock({ groupName, groupId, courses, renameComponent, deleteComponent }) {
    let courseNames = [];
    let courseList = JSON.parse(courses), i = 0;
    for (let course in courseList) {
        courseNames.push(<div key={i}>{courseList[course]}</div>);
        i++;
    }
    return (
        <div className='card groupBlock pb-3 pt-2 pl-2 pr-2'>
            <h2><SettingsButton componentName={groupName} componentId={groupId} deleteComponent={deleteComponent} renameComponent={renameComponent}/> {groupName}</h2>
            {courseNames}
        </div>
    );
}