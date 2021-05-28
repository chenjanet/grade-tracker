import React, { useState } from 'react';
import Dialog from './dialog.component';

export default function Renamer({ initialName, renameId, renameComponent }) {
    const [dialogShow, setDialogShow] = useState(false);
    const [newName, setNewName] = useState(initialName);

    const renameDialogContent = (
        <>
            <label htmlFor='newName'>New name:</label>
            <input id='newName' className='form-control' value={newName} onChange={(e) => setNewName(e.target.value)}/>
        </>
    );

    return (
        <>
            <div 
                className='settingsOption' 
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setDialogShow(true);
                }}
            >
                Rename
            </div>
            <Dialog 
                initialModalShow={dialogShow} 
                modalTitle={'Rename'} 
                modalBody={renameDialogContent} 
                modalConfirm={() => { 
                    renameComponent(renameId, newName); 
                }} 
                onClose={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setDialogShow(false);
                }} 
            />
        </>
    )
}