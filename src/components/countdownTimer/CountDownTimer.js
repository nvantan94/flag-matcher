import React, { useState, useEffect } from 'react'

import './CountDownTimer.css'

function CountDownTimer({ timer }) {
  const [ countdown, setCountdown] = useState(timer);
  const [ width, setWidth ] = useState(100);
  const [ restart, setRestart ] = useState(true);

  useEffect(() => {
    setRestart(true);
    setWidth(100);
    setCountdown(timer);
  }, [timer]);

  useEffect(() => {
    let timeoutId;
    if (restart) {
      timeoutId = setTimeout(() => {
        setRestart(false);
      } , 100);
    } else if (countdown.time > 0) {
      setWidth(width - 100 / (timer.time));
      timeoutId = setTimeout(() => {
        setCountdown({time: countdown.time - 1});
      }, 1000 + 100 / (timer.time));
    }

    return () => clearTimeout(timeoutId);
  }, [countdown, restart])

  const countdownHiderStyle = () => {
    return {
      width: width + '%',
      transition: `width ${width === 100? '0s': '1s'} linear`
    }
  }

  return (
    <div className="countdownTimer">
      <div className="countdownTimer__wrapper">
        <div className="countdownTimer__hider" style={countdownHiderStyle()}></div>
        <div className="countdownTimer__text">{countdown.time}</div>
      </div>
    </div>
  )
}

export default CountDownTimer
