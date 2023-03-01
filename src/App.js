import { createContext, useState } from 'react';
import './App.scss';
import Board from './components/Board/Board';
import HoveredInfo from './components/HoveredInfo/HoveredInfo';
import ModeSelector from './components/ModeSelector/ModeSelector';

export const SquareContext = createContext(null);

function App() {
  const [started, setStarted] = useState(false);
  const [squareCount, setSquareCount] = useState(0);
  const [highlightedSqrs, setHighlightedSqrs] = useState([]);

  const showBoard = (showBoard) => {
    if (!started) {
      setStarted(showBoard);
      setHighlightedSqrs([]);
    }
  }

  const saveMode = (mode) => {
    setSquareCount(mode);
  }

  const toggleHovered = (row, column, filled, id) => {
    let squares = [...highlightedSqrs];

    if (filled) {
      squares.push({ row, column, filled, id });
    } else {
      squares = squares.filter(item => item.id !== id);
    }

    setHighlightedSqrs(squares);
  }

  return (
    <div className='container'>
      <div className='wrapper'>
        <SquareContext.Provider value={toggleHovered}>
          <ModeSelector displayBoard={showBoard} saveMode={saveMode} />
          <Board started={started} pickedMode={squareCount} />
        </SquareContext.Provider>
      </div>
      <HoveredInfo squares={highlightedSqrs} />
    </div>
  );
}

export default App;
