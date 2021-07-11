'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let node = new Node(value);
    if (this.length === 0) {
      this.top = node;
      this.tail = node;
    } else {
      let temp = this.top;
      this.top = node;
      this.top.next = temp;
    }
    this.length++;
    return this.length;
  }

  pop() {
    if (this.length === 0) {
      return null;
    }
    let temp = this.top;
    if (this.length === 1) {
      this.tail = null;
    }
    this.top = this.top.next;
    this.length--;
    return temp;
  }

  peek() {
    if (this.length === 0) return null;
    let temp = this.top;
    return temp;
  }

}


class PseudoQueue {
  constructor() {
    this.firstStack = new Stack();
    this.secondStack = new Stack();
    this.size = 0;
  }

  enqueue(value) {
    this.firstStack.push(value);
    this.size = this.firstStack.length + this.secondStack.length;
  }

  dequeue() {
    if (this.secondStack.length > 0) {
      this.size = this.firstStack.length + this.secondStack.length - 1;
      return this.secondStack.pop();
    }
    while (this.firstStack.length > 0) {
      this.secondStack.push(this.firstStack.pop());
    }
    this.size = this.firstStack.length + this.secondStack.length - 1;
    return this.secondStack.pop();
  }

}

module.exports = PseudoQueue;
