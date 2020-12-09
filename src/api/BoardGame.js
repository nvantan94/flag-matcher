
export default class BoardGame {
  constructor() {
    this.board = new Array(BoardGame.BOARD_SQUARE_SIZE * BoardGame.BOARD_SQUARE_SIZE);

    this.assignedValues = new Array(BoardGame.NUMBER_OF_POTENTION_VALUE + 1);
  }

  static BOARD_SQUARE_SIZE = 5;
  static NUMBER_OF_POTENTION_VALUE = 5;
  static BOARD_SIZE = BoardGame.BOARD_SQUARE_SIZE * BoardGame.BOARD_SQUARE_SIZE;

  start() {
    this.board.fill(0);
    for (var i = 1; i <= BoardGame.NUMBER_OF_POTENTION_VALUE; i++)
      this.assignedValues[i] = [];
    this.boardId = 0;

    this.randomNewCells(8);
  }

  randomNewCells(n) {
    this.board = [...this.board]
    for (var i = 0; i < n; i++) {
      const number = this.randomNewNumber();
      const pos = this.randomNewPosition();

      this.board[pos] = number;
      this.assignedValues[number].push(pos);
    }
    this.boardId++;
  }

  freeCell(pos) {
    const val = this.board[pos];
    this.assignedValues[val] = this.assignedValues[val]
      .filter(v => v !== pos);
    this.board = [...this.board];
    this.board[pos] = 0;

    return this.assignedValues[val].length === 0;
  }

  deepCopyBoard() {
    const newBoard = [...this.board];
    return newBoard;
  }

  randomControlNumber() {
    let number = parseInt(Math.random() * BoardGame.NUMBER_OF_POTENTION_VALUE + 1);
    while (this.assignedValues[number].length === 0) {
      number = number + 1;
      if (number > BoardGame.NUMBER_OF_POTENTION_VALUE)
        number = 1;
    }
    return number;
  }

  randomNewNumber() {
    let number = parseInt(Math.random() * BoardGame.NUMBER_OF_POTENTION_VALUE + 1);
    while (this.assignedValues[number].length === 5) {
      number = number + 1;
      if (number > BoardGame.NUMBER_OF_POTENTION_VALUE)
        number = 1;
    }
    return number;
  }

  randomNewPosition() {
    let pos = parseInt(Math.random() * BoardGame.BOARD_SQUARE_SIZE * BoardGame.BOARD_SQUARE_SIZE);
    while (this.board[pos] !== 0) {
      pos = pos + 1;
      if (pos > BoardGame.BOARD_SIZE)
        pos = 1;
    }
    return pos;
  }
}