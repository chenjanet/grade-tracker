import React from 'react';
import './components.css';

export default function courseBlock(props) {
    return (
        <div className='card courseBlock pb-3 pt-2 pl-2 pr-2'>
            <h2>{props.name}</h2>
            Average:&nbsp;{props.average}
        </div>
    );
}