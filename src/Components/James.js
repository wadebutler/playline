import React, {Component} from 'react';

class James extends Component {
    render() {
        return (
            <div className="playerCard">
                <figure>
                    <img
                        className="playerIcon"
                        src={require("../assets/headshots/Lebron-James.png")} 
                        alt="headshot of lebron james"
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

export default James;