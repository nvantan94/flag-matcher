import React, { useState, useEffect } from 'react'
import FlagItem from '../flagBoard/FlagItem';
import './Control.css'

function Control({ controlNumber, score, timer, onTimerOut, boardId }) {
  const [ countdown, setCountdown ] = useState(timer.time);

  useEffect(() => {
    setCountdown(timer.time);
  }, [timer])

  useEffect(() => {
    if (countdown === 0)
      onTimerOut(boardId);
    else {
      // const timeoutId = setTimeout(() => {
      //     setCountdown(countdown - 1);
      // }, 1000);
      // return () => clearTimeout(timeoutId);
    }
  }, [countdown])

  return (
    <div className="control">
      <div className="control__div3">
        <div className="control__item_wrapper">
          <FlagItem number={controlNumber} />
        </div>
      </div>
      <div className="control__div3 control__countdown">
        {countdown}
      </div>
      <div className="control__div3 control__score">score: {score}</div>
    </div>
  )
}

export default Control
