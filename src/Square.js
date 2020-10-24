import React from 'react';

function Square({value, onClick}) {
  return (
    <button className="square" onClick={() => onClick()}>
      {value === 'X' || value === 'O' ? value : ''}
    </button>
  )
}

export default Square;
