
export default class BoardGame {
  constructor() {
    this.board = new Array(BoardGame.BOARD_SIZE);
    this.assignedValues = new Array(BoardGame.NUMBER_OF_POTENTION_VALUE + 1);
  }

  static BOARD_SQUARE_ROW_SIZE = 6;
  static BOARD_SQUARE_COL_SIZE = 5;
  static NUMBER_OF_POTENTION_VALUE = 12;
  static BOARD_SIZE = BoardGame.BOARD_SQUARE_ROW_SIZE * BoardGame.BOARD_SQUARE_COL_SIZE;
  static MAXIMUM_NUMBER_OF_ONE_FLAG = 3;
  static BOARD_ROW_IDX_ARRAY = [0, 1, 2, 3, 4, 5]

  start() {
    for (var i = 1; i <= BoardGame.NUMBER_OF_POTENTION_VALUE; i++)
      this.assignedValues[i] = [];
    this.boardId = 0;
    this.availableCells = BoardGame.BOARD_SIZE;

    this.fillEntireBoard();
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

  fillEntireBoard() {
    for (var i = 0; i < BoardGame.BOARD_SIZE; i++)
      this.fillCell(i);
  }

  fillCell(pos) {
    const number = this.randomNewNumber();
    this.board[pos] = number;
    this.assignedValues[number].push(pos);
    this.availableCells--;
  }

  randomNewCells(n) {
    this.board = [...this.board]
    for (var i = 0; i < n; i++) {
      if (this.availableCells === 0)
        return false;

      const number = this.randomNewNumber();
      const pos = this.randomNewPosition();
      console.log(number, pos);

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

  randomControlNumbers() {
    const number1 = this.randomControlNumber();
    const number2 = this.randomControlNumber(number1);
    this.randomNumbers = [number1, number2];
  }

  randomControlNumber(exceptedNumber) {
    let number = parseInt(Math.random() * BoardGame.NUMBER_OF_POTENTION_VALUE + 1);
    while (this.assignedValues[number].length === 0 
      || number === exceptedNumber) {
      number = number + 1;
      if (number > BoardGame.NUMBER_OF_POTENTION_VALUE)
        number = 1;
    }
    return number;
  }

  randomNewNumber() {
    let number = parseInt(Math.random() * BoardGame.NUMBER_OF_POTENTION_VALUE + 1);
    while (this.assignedValues[number].length === BoardGame.MAXIMUM_NUMBER_OF_ONE_FLAG) {
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