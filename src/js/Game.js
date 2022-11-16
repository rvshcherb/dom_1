export default class Game {
  constructor(size) {
    this.fieldSize = size;
    this.targetCell = undefined;
  }

  generateField() {
    const field = document.querySelector('.field');
    let i = 0;
    while (i < this.fieldSize) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      field.appendChild(cell);
      i += 1;
    }
  }

  startGame() {
    const field = document.querySelector('.field');
    const cells = Array.from(field.children);

    setInterval(() => {
      this.targetCell = this.createTargetCell();
      cells.forEach((cell) => cell.classList.remove('target'));
      cells[this.targetCell].classList.add('target');
    }, 1000);

    // cells[3].classList.add('red');

    console.dir(cells);
  }

  createTargetCell() {
    const random = Math.floor(Math.random() * this.fieldSize);
    if (random !== this.targetCell) {
      return random;
    }
    return this.createTargetCell();
  }
}
