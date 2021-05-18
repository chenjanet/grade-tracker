import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function BackButton() {
    return(
        <>
            <button className='backButton'><FontAwesomeIcon icon='arrow-left' /> Back</button>
        </>
    );
}