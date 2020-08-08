import React, { ChangeEventHandler } from 'react';
import { connect } from 'react-redux';
import { InitialState } from '../../model/common';
import Header from '../header/header.component';
import Board from '../board/board.component';
import Dice from '../dice/dice.component';
import Timer from '../timer/timer.component'
import PlayerTurn from '../player-turn/player-turn.component';
import { setPlayerNumChange } from '../../redux/actions/snake-ladder.action';
import './sanake-ladder.style.scss';

interface Props {
    snakeLadder: InitialState,
    setPlayerNumChange?: ChangeEventHandler,
}

const SnakeLadder = (props: Props) => {
    const { setPlayerNumChange, snakeLadder } = props;
    const { totalCells, eachRowCells, playerInfo, totalPlayer, activePlayer, start, isFinished } = snakeLadder;
    return (
        <div className="w-100">
            <Header />
            <h3 className="text-center mb-3">
                {
                    start ? `Number of Players ${totalPlayer}` :
                        <>
                            Select Number of Players
                            <select value={totalPlayer} className="mx-2" onChange={setPlayerNumChange}>
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
                        !isFinished ? !start ? "Click on start button to begin the game " : `${playerInfo[activePlayer].name} Player's Turn` :
                        `Hurray! ${playerInfo[activePlayer].name} Wins!`
                    }
                </h3>

                <Dice />
            </div>
        </div>
    );

}

const mapStateToProps = (state: any) => {
    return {
        snakeLadder: {...state.snakeLadder}
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        setPlayerNumChange: (event: any) => dispatch(setPlayerNumChange(event))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SnakeLadder);
