'use strict';

const Node = require('./node');

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    try {
      const node = new Node(value);
      if(!this.top) {
        this.top = node;
      } else {
        node.next = this.top;
        this.top = node;
      }
    } catch (error) {
      console.error({message: error.message});
    }
  }

  pop() {
    try {
      if(!this.top.value) {
        throw new Error('cant remove an element from an empty stack');
      }

      if(this.top) {
        const removedElement = this.top.value;
        this.top = this.top.next;
        return removedElement;
      }
    } catch (error) {
      console.error({message: error.message});
    }
  }

  peek() {
    return this.top ? this.top.value : '==================';
  }

  isEmpty() {
    try {
      if(!this.top.value) {
        return true;
      }

      if(this.top.value) {
        return false;
      }
    } catch (error) {
      console.error({message: error.message});
    }
  }

}

module.exports = Stack;
