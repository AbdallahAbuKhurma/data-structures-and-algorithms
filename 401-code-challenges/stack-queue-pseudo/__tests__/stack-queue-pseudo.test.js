'use strict';

const PseudoQueue = require('../pseudoQueue');

describe('Pseudo Queue', () => {
  it('should enqueue onto the stack', () => {
    let pseudo = new PseudoQueue();
    pseudo.enqueue(1);
    pseudo.enqueue(2);
    expect(pseudo.firstStack.top.value).toBe(2);
    expect(pseudo.firstStack.top.next.value).toBe(1);
    expect(pseudo.size).toBe(2);
  });
  it('should dequeue from the stack', () => {
    let pseudo = new PseudoQueue();
    pseudo.enqueue(1);
    pseudo.enqueue(2);
    pseudo.enqueue(3);
    pseudo.dequeue();
    pseudo.dequeue();
    expect(pseudo.size).toBe(1);
  });
  it('shuold dequeue all the values of the stack', () => {
    let pseudo = new PseudoQueue();
    pseudo.enqueue(1);
    pseudo.enqueue(2);
    pseudo.dequeue();
    pseudo.dequeue();
    expect(pseudo.size).toBe(0);
  });

});
