import React, { useState, useEffect } from 'react'
import './GameOver.css'

function GameOver({ show }) {
  const [isShow, setIsShow] = useState(show);

  useEffect(() => setIsShow(show), [show])

  return (
    <div className={`gameOver${isShow? ' show' : ''}`}>
      game over
    </div>
  )
}

export default GameOver
