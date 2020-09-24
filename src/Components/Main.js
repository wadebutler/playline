import React, { Component } from 'react';
import axios from 'axios';
// import Lebron from './Lebron';

const namesURL = "https://playline-dev-test.s3-us-west-2.amazonaws.com/playline-test.json";

class Main extends Component {
    constructor() {
        super()
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
                <section>
                    <h2>Your Playline is Set</h2>
                    <h3>Come back @ 7:30pm to track it live</h3>
                    <hr/>
                    <p>Pro Tip: you can manage your Playline's until they go live in the Upcoming area</p>
                </section>
                <section>
                    <div>
                        {/* <figure>
                            <img
                                className="playerIcon"
                                src={require("../assets/headshots/Lebron-James.png")} alt="headshot of lebron james"
                            />
                        </figure> */}
                        {/* <p>{this.state.lebron.name}</p> */}
                    </div>
                </section>
            </main>
        );
    }
}

export default Main;