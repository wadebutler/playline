import React from 'react';

const Download = () => {
    return (
        <section className="download">
            <p>Download the App</p>
            <div>
                <a href="">
                    <figure>
                        <img 
                            src={require("../assets/icons/ios-app@2x.png")} 
                            alt="the apple app store icon" 
                        />
                    </figure>
                </a>
                <a href="">
                    <figure>
                        <img 
                            src={require("../assets/icons/google-play@2x.png")} 
                            alt="the google play store icon" 
                        />
                    </figure>
                </a>
            </div>
        </section>
    );
}

export default Download;