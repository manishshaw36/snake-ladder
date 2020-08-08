import { REDUCER_TYPES } from "../constants";

export function pushData(type: string, payload: any = {}) {
    return {
        type,
        payload
    };
}

export const setPlayerNumChange = (event: any) => (dispatch: any) => {
    dispatch(pushData(REDUCER_TYPES.SET_PLAYER_NUM_CHANGE, event))
}

export const rollDice = () => (dispatch: any) => {
    dispatch(pushData(REDUCER_TYPES.DICE_ROLLED))
}


export const resetSnakeLadder = () => (dispatch: any) => {
    dispatch(pushData(REDUCER_TYPES.RESET_SNAKE_LADDER))
}

export const startSnakeLadder = () => (dispatch: any) => {
    dispatch(pushData(REDUCER_TYPES.START_SNAKE_LADDER))
}
