import React from 'react';
import Square from './Square';


function Board({history, updateSquares, status, setStatus, stepNumber}) {
  const rows = [0, 3, 6];

  function renderSquare(i) {
    const squares = history[stepNumber].squares;
    return <Square
      value={squares[i]}
      onClick={() => {
        if (determineWinner(squares)) {
          return;
        }
        updateSquares(i)
      }}
      key={i}
    />;
  }

  function BoardRow(start) {
    const rowNums = [start, start + 1, start + 2];
    return (
      <div className="board-row" key={start}>
        {rowNums.map(i => renderSquare(i))}
      </div>
    );
  }

  const winner = determineWinner(history[stepNumber].squares);
  let message;
  if (winner) {
    message = "Winner: " + winner;
  } else {
    message = "Next player: " + status;
  }

  return (
    <>
      <div className="status">{message}</div>
      {rows.map(i => BoardRow(i))}
    </>
  );
};


function determineWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] !== 'E' && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


export default Board;
