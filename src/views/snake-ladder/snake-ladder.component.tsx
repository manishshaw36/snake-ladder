import React, { Component } from 'react';
import Header from '../header/header.component';
import Board from '../board/board.component';
import Dice from '../dice/dice.component';
import Timer from '../timer/timer.component'
import PlayerTurn from '../player-turn/player-turn.component';
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

const TotalPlayer = [
    new Player('Red'),
    new Player('Blue'),
    new Player('Yellow'),
    new Player('Green')
]

const InitialState = {
    totalPlayer: 2,
    activePlayer: 0,
    playerInfo: TotalPlayer.slice(0, 2),
    isFinished: false,
    diceCaption: "Click on Dice to Roll",
    totalCells: 16,
    eachRowCells: 4,
    diceValue: 3,
    start: false,
}

class SnakeLadder extends Component {

    state: any = InitialState;

    setPlayerNumChange = (event: any) => {
        const { value } = event.target;
        this.setState((state: any) => ({ 
            ...state,
            totalPlayer: value,
            playerInfo: TotalPlayer.slice(0, value)
        }))
    } 

    render() {
        const { totalCells, eachRowCells, playerInfo, diceValue, totalPlayer, activePlayer, diceCaption, start } = this.state
        return (
            <div className="w-100">
                <Header />
                <h3 className="text-center mb-3">
                    {
                        start ? `Number of Players ${totalPlayer}` :
                            <>
                                Select Number of Players
                                <select className="mx-2" onChange={this.setPlayerNumChange}>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </>
                    }
                </h3>
                <div className="d-flex justify-content-center">
                    <Board totalCells={totalCells} eachRowCells={eachRowCells} playerInfo={playerInfo} activePlayer={activePlayer} />
                    <Timer />
                </div>
                <div className="d-flex align-items-center justify-content-between m-4 px-5">
                    <div className="px-3" style={{ transform: "scale(1.3)" }}>
                        <PlayerTurn activePlayer={activePlayer} playerInfo={playerInfo} />
                    </div>
                    <h3 className="mb-0" style={{ marginLeft: "130px" }}>
                        {
                            !start ? "Click on start button to begin the game " : ""
                        }
                    </h3>
                    <Dice value={diceValue} diceCaption={diceCaption} />
                </div>
            </div>
        );
    }
}

export default SnakeLadder;
