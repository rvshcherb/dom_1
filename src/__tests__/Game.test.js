/**
 * @jest-environment jsdom
 */

import Game from "../js/Game";

describe('correct field size', () => {
  test('field size', () => {
    const game = new Game(16);
    game.generateField()
    expect(game.field.children.length).toBe(16);
  })
})