import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './components.css';

export default function NewAdder({ adderType, adderInputLabel, handleAddNew }) {
    const [modalShow, setModalShow] = useState();
    return (
        <>
            <div className="card pb-3 pt-2 pl-2 pr-2 newAdder" onClick={() => setModalShow(true)}>
                <h3><FontAwesomeIcon icon='plus' /> Add {adderType}</h3>
            </div>
            <Modal show={modalShow} onHide={() => setModalShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new {adderType}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label htmlFor='adderInput'>{adderInputLabel}</label>
                    <input type='text' className='form-control' id='adderInput' />
                </Modal.Body>
                <Modal.Footer>
                    <button className='cancelButton' onClick={() => setModalShow(false)}>Cancel</button>
                    <button className='saveButton' onClick={() => {
                        let adderInput = document.getElementById('adderInput').value;
                        if (adderInput === '') {
                            return;
                        }
                        setModalShow(false);
                        handleAddNew(adderInput);
                    }}>Save</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}