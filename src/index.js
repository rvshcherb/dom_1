import './css/style.css';
import Game from './js/Game';

const game = new Game(16);

game.generateField();
game.bindToDom();
game.startGame();
