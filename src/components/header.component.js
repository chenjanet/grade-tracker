import React from 'react';
function Header(props) {
    return (
        <nav class="navbar navbar-light bg-light">
            <div className="row col-12 d-flex justify-content-center">
                <span className="h3">{props.text}</span>
            </div>
        </nav>
    )
}

export default Header;