import { useState, useEffect } from "react";

import "./App.css";
import CountDownTimer from './components/countdownTimer/CountDownTimer'
import FlagBoard from "./components/flagBoard/FlagBoard";
import Control from "./components/control/Control";

import BoardGame from "./api/BoardGame";
import GameOver from "./components/gameOver/GameOver";

const boardGame = new BoardGame();
const COUNTDOWN_TIME = 30;

function App() {
  const [controlNumbers, setControlNumbers] = useState([{number: 0, remaining: 0}, {number: 0, remaining: 0}]);
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
    setScore(0);
    setBoard(boardGame.board);
    setControlNumbers(boardGame.controlNumbers);
  }

  const onFreeItem = (pos) => {
    boardGame.freeCell(pos, controlNumbers);
    
    setBoard(boardGame.board);
    setScore(score + 1);
    setControlNumbers(boardGame.controlNumbers);
  };

  return (
    <div className="App">
      <div className="App__container">
        <div className="App__title">
          <img className="title__left__image" src="./static/images/gif/Flag_of_the_United_Nations.gif" />
          Flag Matcher
          <img className="title__right__image" src="./static/images/gif/Flag_of_the_United_Nations.gif" />
        </div>
        <CountDownTimer
          timer={timer}
          onTimerOut={() => setGameOver(true)}
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
