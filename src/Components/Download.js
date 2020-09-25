import React from 'react';
import appStore from "../assets/icons/ios-app@2x.png";
import googlePlay from "../assets/icons/google-play@2x.png";

export const Download = () => {
    return (
        <section className="download">
            <p>Download the App</p>
            <div>
                <a href="https://www.google.com/" target="_blank">
                <figure>
                    <img src={appStore} alt="the apple app store icon" />
                </figure>
                </a>
                <a href="https://www.google.com/" target="_blank">
                <figure>
                    <img src={googlePlay} alt="the google play store icon" />
                </figure>
                </a>
            </div>
        </section>
    );
}