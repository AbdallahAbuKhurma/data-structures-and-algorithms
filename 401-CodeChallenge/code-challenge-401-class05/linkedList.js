'use strict';

const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const node = new Node(value);
    if(!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  append(value) {
    const node = new Node(value);
    if(!this.head) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while(currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
  }

  includes(value) {
    let current = this.head;
    if (!value) {
      throw new Error('Wrong value went as argument');
    }
    if (!current) {
      throw new Error('Linked List invalid');
    }
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    let current = this.head;
    if (!current) {
      throw new Error('Linked List invalid');
    }
    let finalStr = '';
    while (current) {
      finalStr += `{ ${current.value} } -> `;
      current = current.next;
    }
    return finalStr += 'NULL';
  }

}

module.exports = LinkedList;
