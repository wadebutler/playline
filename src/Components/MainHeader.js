import React from "react";
import {LineElement} from "./LineElement";

export const MainHeader = () => {
    return (
        <section className="mainHeader">
            <h2>Your Playline is Set!</h2>
            <h3>Come back @ 7:30pm to track it live!</h3>
            <LineElement />
            <p>Pro Tip: you can manage your Playline's until they go live in the Upcoming area</p>
        </section>
    );
};