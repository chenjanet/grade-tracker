import React from 'react';
import Deleter from './deleter.component';

import './components.css';

export default function courseBlock({ name, average, courseId, deleteComponent }) {
    return (
        <div className='card courseBlock pb-3 pt-2 pl-2 pr-2'>
            <h2><Deleter deleteComponent={deleteComponent} deleteId={courseId} /> {name}</h2>
            Average:&nbsp;{average}
        </div>
    );
}