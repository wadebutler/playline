import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Buttons from "./Buttons";
import Download from './Download';
import {PlayerCard} from "./PlayerCard";
import progress from "../assets/icons/progress@2x.png";

export const Main = () => {
    const [players, setPlayers] = useState([]);

    const getPlayers = () => {
        axios({
            method: "get",
            url: "http://localhost:4000/players",
            responseType: 'json',
        }).then((results) => {
            const players = results.data.players
            setPlayers(players)
        })}
    

    useEffect(() => {
        getPlayers()
    }, [])

    return (
        <main>
            <figure className="progressBar">
                <img 
                    src={progress} 
                    alt="progress bar"/>
            </figure>
            <section className="mainHeader">
                <h2>Your Playline is Set!</h2>
                <h3>Come back @ 7:30pm to track it live!</h3>
                <div className="line" />
                <p>Pro Tip: you can manage your Playline's until they go live in the Upcoming area</p>
            </section>
            <section className="playerCards">
                {
                    players && players.map((player, index) => {
                        return (
                            <PlayerCard
                                key={index}
                                name={player.last_name}
                                points={player.points}
                            />
                        );
                    })
                }
            </section>
            <Buttons />
            <div className="line" />
            <Download />
        </main>
    );
}