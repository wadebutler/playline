import React, { Component } from 'react';

class Gordon extends Component {
    render() {
        return (
            <div className="playerCard gordon">
                <figure>
                    <img
                        className="playerIcon"
                        src={require("../assets/headshots/Aaron-Gordon.png")}
                        alt="headshot of Aaron Gordon"
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

export default Gordon;