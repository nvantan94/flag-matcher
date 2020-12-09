
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
    this.availableCells = BoardGame.BOARD_SIZE;

    this.randomNewCells(8);
  }

  addNewCell(pos, value) {
    this.board[pos] = value;
    this.assignedValues[value].push(pos);
    this.availableCells--;
  }

  removeCell(pos) {
    const val = this.board[pos];
    this.board[pos] = 0;
    this.assignedValues[val] = this.assignedValues[val]
      .filter(v => v !== pos);
    this.availableCells++;

    return val;
  }

  randomNewCells(n) {
    this.board = [...this.board]
    for (var i = 0; i < n; i++) {
      if (this.availableCells === 0)
        return false;

      const number = this.randomNewNumber();
      const pos = this.randomNewPosition();

      this.addNewCell(pos, number);
    }
    this.boardId++;
    return true;
  }

  freeCell(pos) {
    this.board = [...this.board];
    return this.removeCell(pos);
  }

  isAvailable(value) {
    return this.assignedValues[value].length > 0;
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