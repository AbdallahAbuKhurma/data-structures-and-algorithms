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

  repeatedWord(string){
    if(!string){
      return null;
    }
    const hashTable = new HashTable(3000);
    const key = string.toLowerCase().split(',').join('').split(' ');
    for (let index = 0; index < key.length; index++) {
      if(hashTable.contain(key[index])){
        return key[index];
      } else {
        hashTable.add(key[index]);
      }
    }
  }

  treeIntersection(firstTree, secondTree){
    let firstTreeValues = firstTree.preOrder();
    let secondTreeValues = secondTree.preOrder();

    let results = [];
    for(let i = 0; i < firstTreeValues.length; i++){
      if(firstTreeValues[i] === secondTreeValues[i]){
        results.push(firstTreeValues[i]);
      }
    }
    if(results.length){
      // console.log(results);
      return results;
    } else {
      return null;
    }
  }

  leftJoin(table1, table2) {
    let result = [];

    for (let i = 0; i <= table1.storage.length - 1; i++) {
      if (table1.storage[i]) {
        let key = [Object.keys(table1.storage[i].head.value)[0]][0];
        let value = [Object.values(table1.storage[i].head.value)[0]][0];
        result.push([key, value]);

        if (table1.storage[i].head.next) {
          let current = table1.storage[i].head.next;
          while (current) {
            let key = Object.keys(current.value)[0];
            let value = Object.values(current.value)[0];
            result.push([key, value]);
            current = current.next;
          }
        }
      }
    }
    for (let j = 0; j <= result.length - 1; j++) {
      let join = table2.get(result[j][0]);
      result[j].push(join);
    }
    return result.length === 0 ? null : result;
  }

  uniqueCharacters(string) {
    const hashTable = new HashTable(4000);
    for(let char in string) {
      if (string[char] !== ' ' && hashTable.contain(string[char])){
        return false;
      }
      hashTable.add(string[char]);
    }
    return true;
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
