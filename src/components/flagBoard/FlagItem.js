import React from 'react'
import './FlagItem.css'

import Flags from '../../api/Flags'

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
          {number === 0? '' : <img src={Flags[number - 1].src} />}
      </div>
    </div>
  )
}

export default FlagItem
