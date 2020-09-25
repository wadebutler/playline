import React from "react";
import progress from "../assets/icons/progress@2x.png";

export const ProgressBar = () => {
    return (
        <figure className="progressBar">
            <img src={progress} alt="progress bar" />
        </figure>
    );
};