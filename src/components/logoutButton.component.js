import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './components.css';

export default function LogoutButton() {
    function logout() {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <div className='logoutButton-wrapper'>
            <button className='logoutButton' onClick={logout}><FontAwesomeIcon icon='sign-out-alt' /> Log out</button>
        </div>
    )
}