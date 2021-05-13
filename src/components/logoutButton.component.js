import React from 'react';
import './components.css';

export default function LogoutButton() {
    function logout() {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <div className='logoutButton-wrapper'>
            <button className='logoutButton' onClick={logout}>Log out</button>
        </div>
    )
}