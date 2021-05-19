import React from 'react';
import DeleteButton from './deleteButton.component';

import './components.css';

export default function courseBlock(props) {
    return (
        <div className='card courseBlock pb-3 pt-2 pl-2 pr-2'>
            <h2><DeleteButton deleteComponent={props.deleteComponent} deleteId={props.courseId} /> {props.name}</h2>
            Average:&nbsp;{props.average}
        </div>
    );
}