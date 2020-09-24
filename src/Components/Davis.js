import React, { Component } from 'react';

class Davis extends Component {
    render() {
        return (
            <div className="playerCard davis">
                <figure>
                    <img
                        className="playerIcon"
                        src={require("../assets/headshots/Anthony-Davis.png")}
                        alt="headshot of anthony davis"
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

export default Davis;