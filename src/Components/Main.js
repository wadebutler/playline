import React, { Component } from 'react';
import axios from 'axios';
import James from "./James";
import Davis from "./Davis";
import Gordon from "./Gordan";
import Siakam from "./Siakam";
import Leonard from "./Leonard";
import Lowry from "./Lowry";
import Russell from "./Russell";
import Buttons from "./Buttons";
import Download from './Download';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            james: {
                name: "",
                points: ""
            },
            gordon: {
                name: "",
                points: ""
            },
            davis: {
                name: "",
                points: ""
            },
            russell: {
                name: "",
                points: ""
            },
            leonard: {
                name: "",
                points: ""
            },
            lowry: {
                name: "",
                points: ""
            },
            siakam: {
                name: "",
                points: ""
            }
        }
    }

    componentDidMount = () => {
        axios({
            method: "get",
            url: "http://localhost:4000/players",
            responseType: 'json',
        }).then((results) => {
            const players = results.data.players
            this.setState({
                james: {
                    name: players[0].last_name,
                    points: players[0].points
                },
                gordon: {
                    name: players[2].last_name,
                    points: players[2].points
                },
                davis: {
                    name: players[1].last_name,
                    points: players[1].points
                },
                russell: {
                    name: players[6].last_name,
                    points: players[6].points
                },
                leonard: {
                    name: players[4].last_name,
                    points: players[4].points
                },
                lowry: {
                    name: players[5].last_name,
                    points: players[5].points
                },
                siakam: {
                    name: players[3].last_name,
                    points: players[3].points
                }
            })
        })
    }

    render() {
        return (
            <main>
                <figure className="progressBar">
                    <img src={require("../assets/icons/progress@2x.png")} alt="progress bar"/>
                </figure>
                <section className="mainHeader">
                    <h2>Your Playline is Set!</h2>
                    <h3>Come back @ 7:30pm to track it live!</h3>
                    <p className="line"></p>
                    <p>Pro Tip: you can manage your Playline's until they go live in the Upcoming area</p>
                </section>
                <section>
                    <James
                        name={this.state.james.name}
                        points={this.state.james.points}
                    />
                    <Davis
                        name={this.state.davis.name}
                        points={this.state.davis.points}
                    />
                    <Gordon
                        name={this.state.gordon.name}
                        points={this.state.gordon.points}
                    />
                    <Siakam
                        name={this.state.siakam.name}
                        points={this.state.siakam.points}
                    />
                    <Leonard
                        name={this.state.leonard.name}
                        points={this.state.leonard.points}
                    />
                    <Lowry
                        name={this.state.lowry.name}
                        points={this.state.lowry.points}
                    />
                    <Russell
                        name={this.state.russell.name}
                        points={this.state.russell.points}
                    />
                </section>
                <Buttons />
                <p className="line"></p>
                <Download />
            </main>
        );
    }
}

export default Main;