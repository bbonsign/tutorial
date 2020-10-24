import React, {useState} from 'react';
import './App.css';

import Board from './Board'


function App() {
  const [squares, setSquares] = useState(Array(9).fill('E'));
  const [status, setStatus] = useState('X');
  const [history, setHistory] = useState([{squares}]);

  function updateSquares(i) {
    if (squares[i] === 'E') {
      const newSquares = squares.slice();
      newSquares[i] = status;
      setHistory(history.concat({squares}));
      setSquares(newSquares);
      setStatus(status === 'X' ? 'O' : 'X');
    }
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={squares}
          updateSquares={updateSquares}
          status={status}
          setStatus={setStatus} />
      </div>
      <div className="game-info">
        <div>status</div>
        <ol>{history.map((_, idx) => {
          return <li key={idx}><button>Go to step {idx}</button></li>;
        })}
        </ol>
      </div>
    </div>
  );
}

export default App;
