'use strict';

const Node = require('./node');

class Queue {
  constructor(front, back) {
    this.front = front;
    this.back = back;
  }

  enqueue(value) {
    try {
      const node = new Node(value);
      if (!this.front) {
        this.front = node;
        this.back = node;
      } else {
        this.back.next = node;
        this.back = node;
      }
    } catch (error) {
      console.error({ message: error.message });
    }
  }

  dequeue() {
    try {
      if (!this.front.value) {
        throw new Error('cant remove an element from an empty stack');
      }

      if (this.front) {
        const removedItem = this.front.value;
        this.front = this.front.next;
        return removedItem;
      }
    } catch (error) {
      console.error({ message: error.message });
    }
  }

  peek() {
    return this.front ? this.front.value : '==================';
  }

  isEmpty() {
    try {
      if(!this.front.value) {
        return true;
      }

      if(this.front.value) {
        return false;
      }
    } catch (error) {
      console.error({message: error.message});
    }
  }
}

module.exports = Queue;
