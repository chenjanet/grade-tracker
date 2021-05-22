import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function DeleteButton({ deleteId, deleteComponent }) {
    return ( 
        <>
            <button className='deleteButton' onClick={(e) => deleteComponent(e, deleteId)}><FontAwesomeIcon icon='times' /></button>
        </>
    );
}