import React from 'react';

function Header(props) {
    return (
        <div className='pt-1 pb-1 pl-2 pr-2 header-wrapper'>
            <h2>{props.text}</h2>
        </div>
    )
}

export default Header;