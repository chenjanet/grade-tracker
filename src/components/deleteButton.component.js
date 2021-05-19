import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function DeleteButton(props) {
    return ( 
        <>
            <button className='deleteButton' onClick={(e) => props.deleteComponent(e, props.deleteId)}><FontAwesomeIcon icon='times' /></button>
        </>
    );
}