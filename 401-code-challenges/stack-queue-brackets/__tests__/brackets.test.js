'use strict';

const brackets = require('../brackets');

describe('validate brackets', () => {
  it('should return true when there is no infraction', () => {
    const stack1 = '()[]{}';
    const stack2 = '(){[]}';
    const stack3 = '({[]})';
    expect(brackets(stack1)).toBe(true);
    expect(brackets(stack2)).toBe(true);
    expect(brackets(stack3)).toBe(true);
  });

  it('should return false when there is infraction', () => {
    const stack1 = '(][}{]';
    const stack2 = '()}[]}';
    const stack3 = '(([}]}';
    expect(brackets(stack1)).toBe(false);
    expect(brackets(stack2)).toBe(false);
    expect(brackets(stack3)).toBe(false);
  });

});
