export default class Game {
  constructor(size) {
    this.fieldSize = size;
    this.targetCell = undefined;
    this.field = null;
    this.game = document.querySelector('.game');
  }

  bindToDom() {
    this.game.appendChild(this.field);
  }

  generateField() {
    const field = document.createElement('div');
    field.classList.add('field');
    // this.field = document.querySelector('.field');
    let i = 0;
    while (i < this.fieldSize) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      field.appendChild(cell);
      i += 1;
    }
    this.field = field;
  }

  startGame() {
    const field = document.querySelector('.field');
    const cells = Array.from(field.children);

    setInterval(() => {
      this.targetCell = this.createTargetCell();
      cells.forEach((cell) => cell.classList.remove('target'));
      cells[this.targetCell].classList.add('target');
    }, 1000);
  }

  createTargetCell() {
    const random = Math.floor(Math.random() * this.fieldSize);
    if (random !== this.targetCell) {
      return random;
    }
    return this.createTargetCell();
  }
}
