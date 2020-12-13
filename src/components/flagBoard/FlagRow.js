import React from 'react'
import BoardGame from '../../api/BoardGame';
import FlagItem from './FlagItem';
import './FlagRow.css'

const flagItemContainerStyle = {
  width: 100/BoardGame.BOARD_SQUARE_COL_SIZE + '%',
  paddingTop: 70/BoardGame.BOARD_SQUARE_COL_SIZE + '%',
  position: 'relative'
}

function FlagRow({ data, controlNumbers, onFreeItem, row }) {
  
  return (
    <div className="flagRow">
      {data.map((number, i) => 
        <div key={i} style={flagItemContainerStyle}>
          <FlagItem
            pos={row * BoardGame.BOARD_SQUARE_COL_SIZE + i}
            canRemove={controlNumbers.includes(number)}
            onFreeItem={onFreeItem}
            number={number} />
        </div>)
      }
    </div>
  )
}

export default FlagRow
