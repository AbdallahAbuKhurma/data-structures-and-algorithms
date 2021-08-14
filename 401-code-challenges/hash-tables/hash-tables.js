'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  prepend(value){
    try {
      const node = new Node(value);
      if(!this.head){
        this.head = node;
      } else {
        node.next = this.head;
        this.head = node;
      }
    } catch (error) {
      console.error(error);
    }
  }
}

class HashTable {
  constructor(size){
    this.size = size;
    this.storage = new Array(size);
  }

  hash(key){
    try {
      const sumCharCode = key.split('').reduce((acc, char) => {
        return acc + char.charCodeAt(0);
      }, 0);
      const hashKey = (sumCharCode * 19) % this.size;
      return hashKey;
    } catch (error) {
      console.error(error);
    }
  }

  add(key, value){
    try {
      const hash = this.hash(key);
      if(!this.storage[hash]){
        const ll = new LinkedList();
        ll.prepend({ [key]: value });
        this.storage[hash] = ll;
      } else {
        this.storage[hash].prepend({ [key]: value });
      }
    } catch (error) {
      console.error(error);
    }
  }

  get(key){
    try {
      const hash = this.hash(key);
      if(!this.storage[hash]){
        return null;
      } else {
        if(this.storage[hash].length !== 0){
          let node = this.storage[hash].head;
          while(node){
            if(Object.keys(node.value)[0] === key){
              let value = Object.values(node.value)[0];
              return value;
            }
            node = node.next;
          }
        } else {
          return Object.values(this.storage[hash].head.value)[0];
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  contain(key){
    try {
      const hash = this.hash(key);
      if(this.storage[hash]){
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error(error);
    }
  }
}

// const hashTable = new HashTable(3000);
// console.log(hashTable.hash('junior'));
// the index is 597

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
