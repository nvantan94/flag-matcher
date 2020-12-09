import React, { useState, useEffect } from 'react'
import FlagItem from '../flagBoard/FlagItem';
import './Control.css'

function Control({ controlNumber, score}) {

  return (
    <div className="control">
      <div className="control__div3">
        <div className="control__item_wrapper">
          <FlagItem number={controlNumber} />
        </div>
      </div>
      <div className="control__div3 control__score">score: {score}</div>
    </div>
  )
}

export default Control
