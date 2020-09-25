import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {Buttons} from "./Buttons";
import {Download} from './Download';
import {PlayerCard} from "./PlayerCard";
import {ProgressBar} from "./ProgressBar";
import {MainHeader} from './MainHeader';
import {LineElement} from './LineElement';

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
            <ProgressBar />
            <MainHeader />
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
            <LineElement />
            <Download />
        </main>
    );
}