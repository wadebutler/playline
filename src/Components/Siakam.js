import React, { Component } from 'react';

class Siakam extends Component {
    render() {
        return (
            <div className="playerCard siakam">
                <figure>
                    <img
                        className="playerIcon"
                        src={require("../assets/headshots/Pascal-Siakam.png")}
                        alt="headshot of pascal siakam"
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

export default Siakam;