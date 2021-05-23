import React from 'react';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './components.css';

export default function newGradeAdder({ addGradeFunction }) {
    return (
        <div className='card newGradeAdder' onClick={addGradeFunction}>
            <FontAwesomeIcon icon='plus' /> Add grade
        </div>
    )
}