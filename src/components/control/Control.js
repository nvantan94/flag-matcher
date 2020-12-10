import React from 'react'
import BoardGame from '../../api/BoardGame';
import FlagItem from '../flagBoard/FlagItem';
import './Control.css'

function Control({ controlNumber, score}) {

  return (
    <div className="control">
      <div style={{width: (100 / BoardGame.NUMBER_OF_POTENTION_VALUE) + '%'}}>
        <div className="control__item_wrapper">
          <FlagItem number={controlNumber} />
        </div>
      </div>
      <div className="control__score">score: {score}</div>
    </div>
  )
}

export default Control
