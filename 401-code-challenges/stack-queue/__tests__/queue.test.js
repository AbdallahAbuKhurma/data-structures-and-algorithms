'use strict';

const Node = require('../node');
const Queue = require('../queue');

describe('queue class', () => {
  it('Can successfully instantiate an empty queue and an empty node', () => {
    const node = new Node();
    const queue = new Queue();
    expect(node).toBeDefined();
    expect(queue).toBeDefined();
  });
  it('shoud enqueue into a queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.front.value).toEqual(1);
  });
  it('should enqueue multiple values into a queue', () => {
    const queue = new Queue();
    queue.enqueue(0);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.front.value).toEqual(0);
    expect(queue.front.next.value).toEqual(1);
    expect(queue.front.next.next.value).toEqual(2);
    expect(queue.front.next.next.next.value).toEqual(3);
  });
  it('should dequeue out of a queue the expected value', () => {
    const queue = new Queue;
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toEqual(1);
    expect(queue.front.value).toEqual(2);
  });
  it('should empty a queue after multiple dequeues' ,() => {
    const queue = new Queue;
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.front).toBeNull;
  });
  it('should peek into a queue, seeing the expected value', () => {
    const queue = new Queue;
    queue.enqueue(0);
    queue.enqueue(1);
    expect(queue.peek()).toBe(0);
  });
  it('handles Calling dequeue or peek on empty queue raises exception', () => {
    const queue = new Queue;
    expect(queue.dequeue()).toBeNull;
    expect(queue.peek()).toBe('==================');
  });
});
