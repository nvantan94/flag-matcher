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
  const [controlNumbers, setControlNumbers] = useState([0, 0]);
  const [board, setBoard] = useState(boardGame.board);
  const [score, setScore ] = useState(0);
  const [timer, setTimer] = useState({time: COUNTDOWN_TIME});
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    start();
  }, []);

  const restart = () => {
    start();
    setGameOver(false);
    setTimer({time: COUNTDOWN_TIME});
  }

  const start = () => {
    boardGame.start();
    setBoard(boardGame.board);
    setControlNumbers(boardGame.controlNumbers);
  }

  const add3NewCells = () => {
    // if (!boardGame.randomNewCells(3)) {
    //   setGameOver(true);
    // } else {
    //   setControlNumber(boardGame.randomControlNumber());
    //   setTimer({time: COUNTDOWN_TIME});
    // }
  }

  const onFreeItem = (pos) => {
    const val = boardGame.freeCell(pos, controlNumbers);
    
    setBoard(boardGame.board);
    setScore(score + 1);
    if (boardGame.controlNumbers != controlNumbers)
      setControlNumbers(boardGame.controlNumbers);
  };

  const onTimerOut = (boardId) => {
    // if (boardGame.boardId !== boardId)
    //   return;
    // add3NewCells();

    // setBoard(boardGame.board);
  }

  return (
    <div className="App">
      <div className="App__container">
        <CountDownTimer
          timer={timer}
          onTimerOut={onTimerOut}
        />
        <Control
          controlNumbers={controlNumbers}
          score={score}
        />
        <FlagBoard
          controlNumbers={controlNumbers}
          onFreeItem={onFreeItem}
          board={board}
        />
      </div>
      <GameOver
        show={gameOver}
        score={score}
        restart={restart}
      />
    </div>
  );
}

export default App;
