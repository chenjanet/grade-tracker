import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dialog from './dialog.component';

import './components.css';

export default function NewAdder({ adderType, adderModalBody, handleAddNew }) {
    const [modalShow, setModalShow] = useState();
    const modalTitle = `Add new ${adderType}`;

    const onClose = () => {
        setModalShow(false);
    }

    return (
        <>
            <div className="card pb-3 pt-2 pl-2 pr-2 newAdder" onClick={() => setModalShow(true)}>
                <h3><FontAwesomeIcon icon='plus' /> Add {adderType}</h3>
            </div>
            <Dialog 
                initialModalShow={modalShow} 
                modalTitle={modalTitle} 
                modalBody={adderModalBody} 
                modalConfirm={handleAddNew}
                onClose={onClose}
            />
        </>
    )
}