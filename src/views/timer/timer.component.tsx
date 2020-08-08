import React, { useState, useEffect, CSSProperties } from 'react';

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

const Timer = () => {
  const [seconds, setSeconds] = useState(5);
  const [isActive, setIsActive] = useState(true);

  function reset() {
    setSeconds(5);
    setIsActive(false);
  }

  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds -1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    if(seconds === 0) {
        clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{width: "200px"}}>
      <div style={timerStyle}>
        {seconds}s
      </div>
    </div>
  );
};

export default Timer;