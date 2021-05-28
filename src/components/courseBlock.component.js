import React from 'react';
import SettingsButton from './settingsButton.component';

import './components.css';

export default function courseBlock({ courseName, courseId, average, deleteComponent, renameComponent }) {
    return (
        <div className='card courseBlock pb-3 pt-2 pl-2 pr-2'>
            <h2><SettingsButton componentName={courseName} componentId={courseId} deleteComponent={deleteComponent} renameComponent={renameComponent} /> {courseName}</h2>
            Average:&nbsp;{average}
        </div>
    );
}