'use strict';

const duck = require('../duck');

describe('duck-duck-goose', () => {
  it('should return the value of the A', () => {
    const players = ['A','B','C','D','E'];
    let goose = 1;
    expect(duck(players, goose)).toBe('A');
  });
  it('shoud retuen the value of mutli losers', () => {
    const players = ['A','B','C','D','E'];
    let goose = 1;
    expect(duck(players, goose)).toBe('A');
    goose = 2;
    expect(duck(players, goose)).toBe('B');
    goose = 3;
    expect(duck(players, goose)).toBe('C');
    goose = 4;
    expect(duck(players, goose)).toBe('D');
  });
  it('shoud return the winner', () => {
    const players = ['A','B','C','D','E'];
    let goose = 1;
    expect(duck(players, goose)).toBe('A');
    goose = 2;
    expect(duck(players, goose)).toBe('B');
    goose = 3;
    expect(duck(players, goose)).toBe('C');
    goose = 4;
    expect(duck(players, goose)).toBe('D');
    goose = 5;
    expect(duck(players, goose)).toBe('E');
  });
});
