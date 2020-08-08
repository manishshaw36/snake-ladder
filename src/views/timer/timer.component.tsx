import React, { useState, useEffect, CSSProperties } from 'react';
import { connect } from 'react-redux';
import { InitialState } from '../../model/common';
import { rollDice } from '../../redux/actions/snake-ladder.action';

const timerStyle: CSSProperties = {
  border: "2px solid black",
  borderRadius: "50%",
  fontWeight: 700,
  fontSize: "25px",
  width: "80px",
  height: "80px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}

interface Props {
  snakeLadder: InitialState;
  rollDice: Function;
}

const Timer = (props: Props) => {
  const { rollDice, snakeLadder } = props;
  const { start, activePlayer } = snakeLadder;
  const [seconds, setSeconds] = useState(5);
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    if(start)
    setIsActive(true);
    else setIsActive(false);
    setSeconds(5);
  }, [start, activePlayer])

  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    if (seconds === 0) {
      clearInterval(interval);
      rollDice();
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, rollDice]);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ width: "200px" }}>
      <div style={timerStyle}>
        {seconds}s
      </div>
      <h5 className="m-0">
        Timer
      </h5>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
      snakeLadder: {...state.snakeLadder}
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  rollDice: () => dispatch(rollDice())
})

export default connect(mapStateToProps, mapDispatchToProps)(Timer);