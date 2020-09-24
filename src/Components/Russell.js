import React, { Component } from 'react';

class Russell extends Component {
    render() {
        return (
            <div className="playerCard Russell">
                <figure>
                    <img
                        className="playerIcon"
                        src={require("../assets/headshots/Dangelo-Russell.png")}
                        alt="headshot of dangelo russell"
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

export default Russell;