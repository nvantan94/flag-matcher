import React from 'react'
import './FlagItem.css'

function FlagItem({ number, canRemove, onFreeItem, pos, boardId }) {
  const onClick = () => {
    if (canRemove)
      onFreeItem(pos, boardId);
  }
  return (
    <div className="flagItem">
      <div 
        onClick={onClick}
        className="flagItem__content">
          {number === 0? '' : number}
      </div>
    </div>
  )
}

export default FlagItem
