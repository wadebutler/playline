import React from 'react';

const Buttons = () => {
    return (
        <section className="buttons">
            <div>
                <a href="">
                    <figure>
                        <img
                            src={require("../assets/icons/notify-me@2x.png")}
                            alt="a bell icon"
                        />
                    </figure>
                    <p>Notify Me</p>
                </a>
            </div>
            <div>
                <a href="">
                    <figure>
                        <img
                            src={require("../assets/icons/money-bag@2x.png")}
                            alt="a bar of money icon"
                        />
                    </figure>
                    <p>Deposit</p>
                </a>
            </div>
        </section>
    );
}

export default Buttons;