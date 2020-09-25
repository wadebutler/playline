import React from 'react';

export const PlayerCard = ({name, points}) => {
    const imageURL = `./assets/headshots/${name}.png`;
    
    return (
        <div className="playerCard">
            <figure>
                <img
                    className="playerIcon"
                    src={imageURL} 
                    alt=""
                />
            </figure>
            <div className="playerInfo">
                <h3>{name}</h3>
                <div className="pointBackdrop">
                    <p className="points">{points}</p>
                </div>
                <p>pts</p>
            </div>
        </div>
    );
}