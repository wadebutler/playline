import React from 'react';

const Lebron = (name, points) => {
    return (
        <div>
            <figure>
                <img
                    className="playerIcon"
                    src={require("../assets/headshots/Lebron-James.png")} alt="headshot of lebron james"
                />
            </figure>
            <p>{name}</p>
        </div>
    );
}

export default Lebron;