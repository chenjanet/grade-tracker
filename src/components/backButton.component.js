import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function BackButton() {
    return(
        <>
            <Link to='../'>
            <button className='backButton'><FontAwesomeIcon icon='arrow-left' /> Back</button>
            </Link>
        </>
    );
}