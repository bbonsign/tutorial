import React, {useState} from 'react';
import './App.css';

import Board from './Board'


function App() {
  const empty = Array(9).fill('E');
  const [status, setStatus] = useState('X');
  const [history, setHistory] = useState([{squares: empty}]);
  const [stepNumber, setStepNumber] = useState(0);

  function updateSquares(i) {
    const squares = history[stepNumber].squares;
    if (squares[i] === 'E') {
      const newSquares = squares.slice();
      newSquares[i] = status;
      setHistory(history.slice(0, stepNumber + 1).concat({squares: newSquares}));
      setStatus(status === 'X' ? 'O' : 'X');
      setStepNumber(stepNumber + 1);
    }
  }

  function rewind(step) {
    setStepNumber(step);
    setStatus(step % 2 === 0 ? 'X' : 'O');
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          stepNumber={stepNumber}
          history={history}
          updateSquares={updateSquares}
          status={status}
          setStatus={setStatus} />
      </div>
      <div className="game-info">
        <div>status</div>
        <ol>{history.map((_, idx) => {
          return <li key={idx}><button onClick={() => rewind(idx)}>Go to step {idx}</button></li>;
        })}
        </ol>
      </div>
    </div>
  );
}

export default App;
