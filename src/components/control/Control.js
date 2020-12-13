import React from 'react'
import BoardGame from '../../api/BoardGame';
import FlagItem from '../flagBoard/FlagItem';
import './Control.css'

function Control({ controlNumbers, score}) {

  return (
    <div className="control">
      <div className="control__container" style={{width: (200 / BoardGame.BOARD_SQUARE_COL_SIZE) + '%'}}>
        <div className="control__item_wrapper">
          <FlagItem number={controlNumbers[0]} />
        </div>
        <div className="control__item_wrapper">
          <FlagItem number={controlNumbers[1]} />
        </div>
      </div>
      <div className="control__score">score: {score}</div>
    </div>
  )
}

export default Control
