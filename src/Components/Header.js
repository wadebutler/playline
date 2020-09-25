import React from 'react';
import logo from "../assets/logo/logo@1x.png";

const Header = () => {
    return (
        <header>
            <h1>
                <figure>
                    <img src={logo} alt="playline sports lotto logo" />
                </figure>
            </h1>
        </header>
    );
}

export default Header;