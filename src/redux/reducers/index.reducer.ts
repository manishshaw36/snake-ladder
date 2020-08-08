import { combineReducers } from 'redux';
import snakeLadderReducer from './snake-ladder.reducer';

export default combineReducers({
    snakeLadder: snakeLadderReducer
})