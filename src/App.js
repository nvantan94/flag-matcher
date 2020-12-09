import { useState, useEffect } from "react";

import "./App.css";
import CountDownTimer from './components/countdownTimer/CountDownTimer'
import FlagBoard from "./components/flagBoard/FlagBoard";
import Control from "./components/control/Control";

import BoardGame from "./api/BoardGame";
import GameOver from "./components/gameOver/GameOver";

const boardGame = new BoardGame();
const COUNTDOWN_TIME = 5;

function App() {
  const [controlNumber, setControlNumber] = useState(0);
  const [board, setBoard] = useState(boardGame.board);
  const [score, setScore ] = useState(0);
  const [timer, setTimer] = useState({time: COUNTDOWN_TIME});
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    boardGame.start();
    setBoard(boardGame.board);
    setControlNumber(boardGame.randomControlNumber());
  }, []);

  const add3NewCells = () => {
    if (!boardGame.randomNewCells(3)) {
      setGameOver(true);
    } else {
      setControlNumber(boardGame.randomControlNumber());
      setTimer({time: COUNTDOWN_TIME});
    }
  }

  const onFreeItem = (pos, boardId) => {
    if (boardGame.board.boardId !== boardId)
      return;
    const val = boardGame.freeCell(pos);
    if (!boardGame.isAvailable(val))
      add3NewCells();
    
    setBoard(boardGame.board);
    setScore(score + 1);
  };

  const onTimerOut = (boardId) => {
    if (boardGame.board.boardId !== boardId)
      return;
    add3NewCells();

    setBoard(boardGame.board);
  }

  return (
    <div className="App">
      <div className="App__container">
        <CountDownTimer
          timer={timer}
          onTimerOut={onTimerOut}
          boardId={board.boardId}
        />
        <Control
          controlNumber={controlNumber}
          score={score}
        />
        <FlagBoard
          controlNumber={controlNumber}
          onFreeItem={onFreeItem}
          board={board}
        />
      </div>
      <GameOver
        show={gameOver}
        score={score}
      />
    </div>
  );
}

export default App;
