import React from 'react'

import FlagRow from './FlagRow'
import BoardGame from '../../api/BoardGame';

const rowIdxs = [0, 1, 2, 3, 4, 5];

function FlagBoard({ board, boardId, controlNumber, onFreeItem }) {
  return (
    <div className="flagBoard">
      {rowIdxs.map((rowIdx) => 
        <FlagRow
          controlNumber={controlNumber}
          data={board.slice(rowIdx * BoardGame.BOARD_SQUARE_COL_SIZE,
             BoardGame.BOARD_SQUARE_COL_SIZE * (rowIdx + 1))}
          boardId={boardId}
          key={rowIdx}
          row={rowIdx}
          onFreeItem={onFreeItem}
        />)}
    </div>
  )
}

export default FlagBoard
