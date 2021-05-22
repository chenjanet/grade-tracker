import React from 'react';

function Header({ headerText }) {
    return (
        <div className='pt-1 pb-1 pl-2 pr-2 header-wrapper'>
            <h2>{headerText}</h2>
        </div>
    )
}

export default Header;