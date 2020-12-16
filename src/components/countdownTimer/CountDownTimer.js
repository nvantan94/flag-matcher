import React, { useEffect } from 'react'
import $ from 'jquery';

import './CountDownTimer.css'

function CountDownTimer({ timer, onTimerOut }) {

  useEffect(() => {
    const countdownHider = $("#CountdownTimerHider");
    countdownHider.width('100%');
    countdownHider.animate({width: `0`}, timer.time * 1000,
        onTimerOut);
  }, [timer]);

  return (
    <div className="countdownTimer">
      <div className="countdownTimer__wrapper">
        <div id='CountdownTimerHider' className="countdownTimer__hider"></div>
      </div>
    </div>
  )
}

export default CountDownTimer
