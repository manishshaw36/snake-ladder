import React, { useState, useEffect, CSSProperties } from 'react';
import { connect } from 'react-redux';
import { InitialState } from '../../model/common';
import { timeOut } from '../../redux/actions/snake-ladder.action';

const timerStyle: CSSProperties = {
  border: "2px solid black",
  borderRadius: "10px",
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
  timeOut: Function;
}

const Timer = (props: Props) => {
  const { timeOut, snakeLadder } = props;
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
      timeOut();
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, timeOut]);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ width: "200px" }}>
      <div style={timerStyle}>
        {seconds}s
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
      snakeLadder: {...state.snakeLadder}
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  timeOut: () => dispatch(timeOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(Timer);