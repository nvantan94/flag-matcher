import React from 'react'
import BoardGame from '../../api/BoardGame';
import FlagItem from '../flagBoard/FlagItem';
import './Control.css'

function Control({ controlNumbers, score}) {

  return (
    <div className="control">
      <div className="control__container" style={{width: (200 / BoardGame.BOARD_SQUARE_COL_SIZE) + '%'}}>
        {controlNumbers.map((controlNumber, idx) => (
          <div className="control__item_wrapper" key={idx}>
            <div
              className="control__item__hider"
              style={{width: (100 * (1 - controlNumber.remaining / BoardGame.MAXIMUM_NUMBER_OF_ONE_FLAG)) + '%'}}></div>
            <FlagItem number={controlNumber.number} />
          </div>
        ))}
      </div>
      <div className="control__score">score: {score}</div>
    </div>
  )
}

export default Control
