import React, { CSSProperties } from 'react';

class BoardCellObj {
    players: string[] = [];
    value: string | number;
    id: number = 0;
    constructor(value: string | number, id: number) {
        this.value = value;
        this.id = id;
    }
}

const boardStyle = {
    width: "500px",
    height: "500px",
    border: "2px solid black",
    marginLeft: "190px"
}

const boardCellStyle = {
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

const dotStyle = (color: string) => ({
    height: "25px",
    width: "25px",
    backgroundColor: color,
    borderRadius: "50%",
    display: "inline-block"
})

const Board = (props: any) => {
    let { totalCells, eachRowCells, playerInfo } = props;
    let board: BoardCellObj[] = []
    let row: any = []
    for(let i = totalCells-1; i >= 0; i--) {
        row.push(new BoardCellObj(i, i));
        if(row.length === eachRowCells) {
            if((board.length/4)%2) {
                board.push(...row.reverse());
            } else {
                board.push(...row);
            }
            row = [];
        }
    }
    board[0].value = "WIN";
    board[totalCells-4].value = "START";
    return (
        <div className="d-flex position-relative flex-wrap" style={boardStyle}> 
            {
                board.map((ele, index) => 
                    <div key={index} style={boardCellStyle} className="position-relative">
                        <h2 className="m-0" style={cellValueStyle}>{ele.value}</h2>
                        <div className="d-flex justify-content-end">
                            {
                                playerInfo.map((player: any) => 
                                    player.score === ele.id ? 
                                        <span key={player.name} style={dotStyle(player.name.toLowerCase())}></span>
                                    : null
                                )
                            }
                        </div> 
                    </div>
                )
            }
        </div>
    )
}

export default Board;