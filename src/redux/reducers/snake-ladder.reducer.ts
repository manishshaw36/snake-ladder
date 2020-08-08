import { InitialState, getTotalPlayer } from '../../model/common';
import { REDUCER_TYPES } from '../constants';


const initialState: InitialState = new InitialState()

/**
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
export default function snakeLadderReducer(state = initialState, action: any) {
    const { type, payload } = action;
    let { playerInfo, activePlayer, totalPlayer, totalCells } = state;

    switch (type) {

        case REDUCER_TYPES.SET_PLAYER_NUM_CHANGE:
            const { value } = payload.target;
            return {
                ...state,
                totalPlayer: value,
                playerInfo: getTotalPlayer(value)
            }

        case REDUCER_TYPES.START_SNAKE_LADDER: 
            return {
                ...state,
                start: true,
                isFinished: false,
                playerInfo: getTotalPlayer(totalPlayer)
            }

        case REDUCER_TYPES.DICE_ROLLED: 
            const diceRoll = Math.floor( Math.random() * 3 ) + 1;
            let updatedScore = playerInfo[activePlayer].score + diceRoll;
            let isWinner = (updatedScore === (totalCells-1)) ? true : false;
            if(playerInfo[activePlayer].score || diceRoll === 1) {
                if(updatedScore < totalCells){
                    playerInfo[activePlayer].score = updatedScore;
                }
            }
            return {
                ...state,
                start: !isWinner,
                isFinished: isWinner,
                diceValue: diceRoll,
                activePlayer: isWinner ? activePlayer :(activePlayer+1)%totalPlayer,
                playerInfo: [...playerInfo]
            }

        case REDUCER_TYPES.TIME_OUT: 
            return {
                ...state,
                activePlayer: (activePlayer+1)%totalPlayer,
            }
        case REDUCER_TYPES.RESET_SNAKE_LADDER: 
            return {
                ...new InitialState()
            }
        default :
            return {
                ...state
            }
    }
}