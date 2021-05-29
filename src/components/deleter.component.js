import React, { useState } from 'react';
import Dialog from './dialog.component';

export default function Deleter({ deleteId, deleteComponent, onDialogShow }) {
    const [dialogShow, setDialogShow] = useState(false);
    return ( 
        <>
            <div 
                className='settingsOption deleteOption' 
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setDialogShow(true);
                    onDialogShow();
                }}
            >
                Delete
            </div>
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