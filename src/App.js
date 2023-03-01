import { createContext, useState } from 'react';
import './App.scss';
import BoardComponent from './components/BoardComponent/Board';
import HoveredInfoComponent from './components/HoveredInfoComponent/HoveredInfo';
import ModeSelectorComponent from './components/ModeSelectorComponent/ModeSelector';

export const squareContext = createContext(null);

function App() {
  const [started, setStarted] = useState(false);
  const [squareConut, setSquareConut] = useState(0);
  const [highlightedSqrs, setHighlightedSqrs] = useState([]);

  const showBoard = (showBoard) => {
    setStarted(showBoard);
    setHighlightedSqrs([]);
  }

  const saveMode = (mode) => {
    setSquareConut(mode);
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
        <squareContext.Provider value={toggleHovered}>
          <ModeSelectorComponent displayBoard={showBoard} saveMode={saveMode} />
          <BoardComponent started={started} pickedMode={squareConut} />
        </squareContext.Provider>
      </div>
      <HoveredInfoComponent squares={highlightedSqrs} />
    </div>
  );
}

export default App;
