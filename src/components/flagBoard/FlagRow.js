import React from 'react'
import BoardGame from '../../api/BoardGame';
import FlagItem from './FlagItem';
import './FlagRow.css'

const flagItemContainerStyle = {
  width: 100/BoardGame.BOARD_SQUARE_COL_SIZE + '%',
  paddingTop: 70/BoardGame.BOARD_SQUARE_COL_SIZE + '%',
  position: 'relative'
}

function FlagRow({ data, controlNumber, onFreeItem, row, boardId }) {
  
  return (
    <div className="flagRow">
      {data.map((number, i) => 
        <div key={i} style={flagItemContainerStyle}>
          <FlagItem
            pos={row * BoardGame.BOARD_SQUARE_SIZE + i}
            canRemove={controlNumber === number}
            onFreeItem={onFreeItem}
            boardId={boardId}
            number={number} />
        </div>)
      }
    </div>
  )
}

export default FlagRow
