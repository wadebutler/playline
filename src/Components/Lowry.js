import React, { Component } from 'react';

class Lowry extends Component {
    render() {
        return (
            <div className="playerCard">
                <figure>
                    <img
                        className="playerIcon"
                        src={require("../assets/headshots/Kyle-Lowry.png")}
                        alt="headshot of kyle lowry"
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

export default Lowry;