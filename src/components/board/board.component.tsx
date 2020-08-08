import React, { CSSProperties } from 'react';
import PlayerTurn from '../player-turn/player-turn.component';
import { SNAKES, LADDER } from '../../redux/constants';

class BoardCellObj {
    players: string[] = [];
    value: string | number;
    id: number = 0;
    constructor(value: string | number, id: number) {
        this.value = value;
        this.id = id;
    }
}

const boardStyle: CSSProperties = {
    width: "500px",
    height: "500px",
    border: "2px solid black",
    marginLeft: "190px"
}

const boardCellStyle: CSSProperties = {
    width: "124px",
    height: "124px",
    border: "2px solid black"
}

const cellValueStyle: CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
}

const specialCellStyle: CSSProperties = {
    position: 'absolute',
    bottom: '0',
    left: '18%',
    fontWeight: 900
}

const Board = (props: any) => {
    let { totalCells, eachRowCells, playerInfo, activePlayer } = props;
    let board: BoardCellObj[] = [];
    let row: any = [];
    for(let i = totalCells-1; i >= 0; i--) {
        row.push(new BoardCellObj(i, i));
        if(row.length === eachRowCells) {
            if((board.length/eachRowCells)%2) {
                board.push(...row.reverse());
            } else {
                board.push(...row);
            }
            row = [];
        }
    }
    board[0].value = "WIN";
    board[totalCells-eachRowCells].value = "START";
    
    return (
        <div className="d-flex position-relative flex-wrap" style={boardStyle}> 
            {
                board.map((ele, index) => 
                    <div key={index} style={boardCellStyle} className="position-relative">
                        <h2 className="m-0" style={cellValueStyle}>{ele.value}</h2>
                        <PlayerTurn boardCellId={ele.id} playerInfo={playerInfo} activePlayer={activePlayer}/>
                        {
                            SNAKES[ele.id] ? 
                                <p className="m-0 text-center text-danger" style={specialCellStyle}>
                                    Snake: <br /> move to {SNAKES[ele.id]}
                                </p> : null
                        }
                        {
                            LADDER[ele.id] ? 
                                <p className="m-0 text-center text-warning" style={specialCellStyle}>
                                    Ladder: <br /> move to {LADDER[ele.id]}
                                </p> : null
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Board;