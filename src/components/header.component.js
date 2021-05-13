import React from 'react';

function Header(props) {
    return (
        <div className='pt-1 pb-1 pl-2 pr-2 header-wrapper'>
            <h3>{props.text}</h3>
        </div>
    )
}

export default Header;