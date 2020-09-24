import React, { Component } from 'react';

class Leonard extends Component {
    render() {
        return (
            <div className="playerCard leonard">
                <figure>
                    <img
                        className="playerIcon"
                        src={require("../assets/headshots/Kawhi-Leonard.png")}
                        alt="headshot of kawhi leonard"
                    />
                </figure>
                <div className="playerInfo">
                    <p>{this.props.name}</p>
                    <div className="pointBackdrop">
                        <p className="points">{this.props.points}</p>
                    </div>
                    <p>pts</p>
                </div>
            </div>
        );
    }
}

export default Leonard;