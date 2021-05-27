import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';

export default function Dialog({ initialModalShow, modalTitle, modalBody, modalConfirm, onClose }) {
    const [modalShow, setModalShow] = useState(initialModalShow);
    useEffect(() => {
        setModalShow(initialModalShow);
    }, [initialModalShow]);
    
    return (
        <Modal show={modalShow} onHide={() => setModalShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {modalBody}
            </Modal.Body>
            <Modal.Footer>
                <button className='cancelButton' onClick={() => {
                    onClose();
                    setModalShow(false);
                }}>Cancel</button>
                <button className='saveButton' onClick={() => {
                    modalConfirm();
                    onClose();
                    setModalShow(false);
                }}>Save</button>
            </Modal.Footer>
        </Modal>
    )
}