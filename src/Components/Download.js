import React from 'react';
import appStore from "../assets/icons/ios-app@2x.png";
import googlePlay from "../assets/icons/google-play@2x.png";

const Download = () => {
    return (
        <section className="download">
            <p>Download the App</p>
            <div>
                <a href="">
                    <figure>
                        <img 
                            src={appStore} 
                            alt="the apple app store icon" 
                        />
                    </figure>
                </a>
                <a href="">
                    <figure>
                        <img 
                            src={googlePlay} 
                            alt="the google play store icon" 
                        />
                    </figure>
                </a>
            </div>
        </section>
    );
}

export default Download;