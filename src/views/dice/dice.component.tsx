import React from 'react';

import './dice.style.scss';

interface Props {
    value: number;
}

const getDiceValue = (value: number) => {
    let dice: any = [];
    for(let i = 0; i < value; i++) {
        dice.push(<span key={i} className="pip"></span>)
    }
    return dice;
} 

const Dice = (props: Props) => {
    let { value } = props;
    return <div className="d-flex flex-column align-items-center justify-content-center">
        <div className="face">
            {getDiceValue(value)}
        </div> 
        <h5 className="m-2">Click on dice to roll</h5>
    </div>  
}

export default Dice;