import React, { Component } from 'react';
import Header from '../header/header.component';
import Board from '../board/board.component';
import Dice from '../dice/dice.component';
import Timer from '../timer/timer.component'
// import Board from './Board.js';
// import Player from './Player.js';
// import Entry from './Entry.js';
// import Result from './Result.js';
// import PlayerPosition from './PlayerPosition.js';
import './sanake-ladder.style.scss';

class Player {
    score: number = 0;
    hasFinished: boolean = false;
    isWinner: boolean = false;
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class SnakeLadder extends Component {
    state: any = {
        totalPlayer: 2,
        activePlayer: 0,
        playerInfo: [
            new Player('Red'),
            new Player('Blue')
        ],
        isFinished: false,
        hasOwn: undefined,
        diceCaption: "Roll it",
        isEntryDisplay: true,
        totalCells: 16,
        eachRowCells: 4,
        diceValue: 3
    };

    render() {
        const { totalCells, eachRowCells, playerInfo, diceValue, totalPlayer } = this.state
        return (
            <div className="w-100">
                <Header />
                <h2 className="text-center mb-3"> Number of Players {totalPlayer}</h2>
                <div className="d-flex justify-content-center">
                    <Board totalCells={totalCells} eachRowCells={eachRowCells} playerInfo={playerInfo} />
                    <Timer />
                </div>
                <div className="d-flex justify-content-center m-4">

                    <Dice value={diceValue}/>
                </div>
            </div>
        );
    }
}

export default SnakeLadder;
