import './reset.css';
import './App.css';
import Board from './components/Board';

function App() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <p>game-info</p>
      </div>
    </div>
  );
}

export default App;
