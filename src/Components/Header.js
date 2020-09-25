import React from 'react';
import logo from "../assets/logo/logo@1x.png";

export const Header = () => {
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