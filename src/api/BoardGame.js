export default class BoardGame {
  constructor() {
    this.board = new Array(BoardGame.BOARD_SIZE);
    this.assignedValues = new Array(BoardGame.NUMBER_OF_POTENTION_VALUE + 1);
  }

  static BOARD_SQUARE_ROW_SIZE = 6;
  static BOARD_SQUARE_COL_SIZE = 5;
  static NUMBER_OF_POTENTION_VALUE = 12;
  static BOARD_SIZE = BoardGame.BOARD_SQUARE_ROW_SIZE * BoardGame.BOARD_SQUARE_COL_SIZE;
  static MAXIMUM_NUMBER_OF_ONE_FLAG = Math.ceil(BoardGame.BOARD_SIZE / (BoardGame.NUMBER_OF_POTENTION_VALUE - 2));
  static BOARD_ROW_IDX_ARRAY = [0, 1, 2, 3, 4, 5]

  start() {
    for (var i = 1; i <= BoardGame.NUMBER_OF_POTENTION_VALUE; i++)
      this.assignedValues[i] = [];
    this.availableCells = BoardGame.BOARD_SIZE;

    this.fillEntireBoard();
    this.controlNumbers = this.randomControlNumbers();
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
    const number1 = this.randomNewNumber([]);
    const number2 = this.randomNewNumber([number1]);
    for (var i = 0; i < BoardGame.BOARD_SIZE; i++)
      this.fillCell(i, [number1, number2]);
  }

  fillCell(pos, exceptedNumbers) {
    const number = this.randomNewNumber(exceptedNumbers);
    this.board[pos] = number;
    this.assignedValues[number].push(pos);
    this.availableCells--;
  }

  freeCell(pos) {
    this.board = [...this.board];
    const val = this.removeCell(pos);
    this.fillCell(pos, this.controlNumbers.map(controlNumber => controlNumber.number));

    if (this.assignedValues[this.controlNumbers[0].number].length === 0
      && this.assignedValues[this.controlNumbers[1].number].length === 0)
      this.controlNumbers = this.randomControlNumbers();
    else {
      const number1 = this.controlNumbers[0].number;
      const number2 = this.controlNumbers[1].number;
      this.controlNumbers = [ 
        {number: number1, remaining: val === number1? this.controlNumbers[0].remaining - 1: this.controlNumbers[0].remaining},
        { number: number2, remaining: val === number2? this.controlNumbers[1].remaining - 1: this.controlNumbers[1].remaining}]
    }
  }

  isAvailable(value) {
    return this.assignedValues[value].length > 0;
  }

  randomControlNumbers() {
    const number1 = this.randomControlNumber();
    const number2 = this.randomControlNumber(number1);
    return [ {number: number1, remaining: BoardGame.MAXIMUM_NUMBER_OF_ONE_FLAG},
            { number: number2, remaining: BoardGame.MAXIMUM_NUMBER_OF_ONE_FLAG}];
  }

  randomControlNumber(exceptingNumber) {
    let number = parseInt(Math.random() * BoardGame.NUMBER_OF_POTENTION_VALUE + 1);
    while (this.assignedValues[number].length === 0 
      || exceptingNumber === number) {
      number = number + 1;
      if (number > BoardGame.NUMBER_OF_POTENTION_VALUE)
        number = 1;
    }
    return number;
  }

  randomNewNumber(exceptedNumbers) {
    let number = parseInt(Math.random() * BoardGame.NUMBER_OF_POTENTION_VALUE + 1);
    while (this.assignedValues[number].length === BoardGame.MAXIMUM_NUMBER_OF_ONE_FLAG
        || exceptedNumbers.includes(number)) {
      number = number + 1;
      if (number > BoardGame.NUMBER_OF_POTENTION_VALUE)
        number = 1;
    }
    return number;
  }
}