import React from 'react';
import notify from "../assets/icons/notify-me@2x.png";
import moneyBag from "../assets/icons/money-bag@2x.png";

const Buttons = () => {
    return (
        <section className="buttons">
            <div>
                <a href="">
                    <figure>
                        <img
                            src={notify}
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
                            src={moneyBag}
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