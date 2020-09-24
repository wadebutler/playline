import React, { Component } from 'react';

class Gordon extends Component {
    render() {
        return (
            <div className="playerCard">
                <figure>
                    <img
                        className="playerIcon"
                        src={require("../assets/headshots/Aaron-Gordon.png")}
                        alt="headshot of Aaron Gordon"
                    />
                </figure>
                <div className="playerInfo">
                    <p>{this.props.name}</p>
                    <p className="points">{this.props.points}</p>
                    <p>pts</p>
                </div>
            </div>
        );
    }
}

export default Gordon;