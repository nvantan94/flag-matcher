import React, { useState, useEffect } from 'react'
import './GameOver.css'

function GameOver({ show, score, restart }) {
  const [isShow, setIsShow] = useState(show);

  useEffect(() => setIsShow(show), [show])

  return (
    <div className={`gameOver${isShow? ' show' : ''}`}>
      <div className="gameOver__container">
        <h1>CONGRATS!!!</h1>
        <h3 className="finalScore">your score: {score}</h3>
        <button className="startAgainBtn" onClick={restart}>start again!</button>
      </div>
    </div>
  )
}

export default GameOver
