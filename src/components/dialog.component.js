import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';

export default function Dialog({ initialModalShow, modalTitle, modalBody, modalConfirm, onClose }) {
    const [modalShow, setModalShow] = useState(initialModalShow);
    useEffect(() => {
        setModalShow(initialModalShow);
    }, [initialModalShow]);
    
    return (
        <Modal show={modalShow} onHide={() => setModalShow(false)} onClick={(e) => e.preventDefault()}>
            <Modal.Header closeButton>
                <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {modalBody}
            </Modal.Body>
            <Modal.Footer>
                <button className='cancelButton' onClick={(e) => {
                    onClose(e);
                    setModalShow(false);
                }}>Cancel</button>
                <button className='saveButton' onClick={(e) => {
                    modalConfirm();
                    onClose(e);
                    setModalShow(false);
                }}>Save</button>
            </Modal.Footer>
        </Modal>
    )
}