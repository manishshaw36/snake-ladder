import React, { MouseEventHandler } from 'react';

import './dice.style.scss';
import { connect } from 'react-redux';
import { rollDice } from '../../redux/actions/snake-ladder.action';
import { InitialState } from '../../model/common';

interface Props {
    snakeLadder: InitialState;
    rollDice: MouseEventHandler;
}

const getDiceValue = (value: number) => {
    let dice: any = [];
    for(let i = 0; i < value; i++) {
        dice.push(<span key={i} className="pip"></span>)
    }
    return dice;
} 

const Dice = (props: Props) => {
    const { rollDice, snakeLadder } = props;
    const { diceValue, diceCaption, start } = snakeLadder;
    return <div className="d-flex flex-column align-items-center justify-content-center px-3">
        <div className="face" onClick={(event: React.MouseEvent) => {
            if(start) rollDice(event)
            else alert("Please begin the Game by clicking on Start button")
        }}>
            {getDiceValue(diceValue)}
        </div> 
        <h5 className="m-2">{diceCaption}</h5>
    </div>  
}

const mapStateToProps = (state: any) => ({
    snakeLadder: {...state.snakeLadder}
})

const mapDispatchToProps = (dispatch: any) => ({
    rollDice: () => dispatch(rollDice())
})

export default connect(mapStateToProps, mapDispatchToProps)(Dice);