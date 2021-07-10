'use strict';

const Node = require('../node');
const Stack = require('../stack');

describe('stack class', () => {
  it('Can successfully instantiate an empty stack and an empty node', () => {
    const node = new Node();
    const stack = new Stack();
    expect(node).toBeDefined();
    expect(stack).toBeDefined();
  });
  it('shoud push onto a stack', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.top.value).toEqual(1);
  });
  it('should push multiple values onto a stack', () => {
    const stack = new Stack();
    stack.push(0);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
    expect(stack.top.next.next.value).toEqual(1);
    expect(stack.top.next.next.next.value).toEqual(0);
  });
  it('should pop off the stack', () => {
    const stack = new Stack;
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toEqual(2);
  });
  it('should empty a stack after multiple pops' ,() => {
    const stack = new Stack;
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.top).toBeNull;
  });
  it('should peek the next item on the stack', () => {
    const stack = new Stack;
    stack.push(0);
    stack.push(1);
    expect(stack.peek()).toBe(1);
  });
  it('handles Calling pop or peek on empty stack raises exception', () => {
    const stack = new Stack;
    expect(stack.pop()).toBeNull;
    expect(stack.peek()).toBe('==================');
  });
});
