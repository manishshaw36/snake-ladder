import React from "react";

interface Props {
    playerInfo: any;
    activePlayer: number;
    boardCellId?: number;
}

const dotStyle = (color: string) => ({
    height: "25px",
    width: "25px",
    backgroundColor: color,
    borderRadius: "50%",
    display: "inline-block",
    margin: 0
})

const getDot = (player: any, playerIdx: number, activePlayer: number) => (
    <div key={player.name} className="d-flex flex-column align-items-center">
        <p style={dotStyle(player.name.toLowerCase())}></p>
        {activePlayer === playerIdx ? <h5 className="m-0">&#8682;</h5> : null}
    </div>
)


const PlayerTurn = (props: Props) => {
    const { playerInfo, activePlayer, boardCellId } = props;
    return <div className="d-flex justify-content-end">
    {
        playerInfo.map((player: any, index: number) => {
            if(boardCellId === undefined) return getDot(player, index, activePlayer)
            else if(boardCellId === player.score) return getDot(player, index, activePlayer)
            return
        })
    }
    </div> 
}

export default PlayerTurn;