import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './components.css';

export default function NewGroupAdder(props) {
    return (
        <div className="card pb-3 pt-2 pl-2 pr-2 newGroupAdder" onClick={props.onClick}>
            <h3><FontAwesomeIcon icon='plus' /> Add term</h3>
        </div>
    )
}