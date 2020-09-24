import React, { Component } from 'react';

class Lowry extends Component {
    render() {
        return (
            <div className="playerCard lowry">
                <figure>
                    <img
                        className="playerIcon"
                        src={require("../assets/headshots/Kyle-Lowry.png")}
                        alt="headshot of kyle lowry"
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

export default Lowry;