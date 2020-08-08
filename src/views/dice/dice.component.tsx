import React from 'react';

import './dice.style.scss';

interface Props {
    value: number;
    diceCaption: string;
}

const getDiceValue = (value: number) => {
    let dice: any = [];
    for(let i = 0; i < value; i++) {
        dice.push(<span key={i} className="pip"></span>)
    }
    return dice;
} 

const Dice = (props: Props) => {
    let { value, diceCaption } = props;
    return <div className="d-flex flex-column align-items-center justify-content-center px-3">
        <div className="face">
            {getDiceValue(value)}
        </div> 
        <h5 className="m-2">{diceCaption}</h5>
    </div>  
}

export default Dice;