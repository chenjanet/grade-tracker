import React, { useState } from 'react';
import Dialog from './dialog.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Deleter({ deleteId, deleteComponent }) {
    const [dialogShow, setDialogShow] = useState(false);
    return ( 
        <>
            <button 
                className='deleteButton' 
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setDialogShow(true);
                }}
            >
                <FontAwesomeIcon icon='times' />
            </button>
            <Dialog 
                initialModalShow={dialogShow} 
                modalTitle={'Are you sure you want to delete?'} 
                modalBody={''} 
                modalConfirm={() => { 
                    deleteComponent(deleteId) 
                }} 
                onClose={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setDialogShow(false);
                }} 
            />
        </>
    );
}