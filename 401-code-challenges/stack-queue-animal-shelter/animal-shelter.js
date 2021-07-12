'use strict';

class Node {
  constructor(value, type, next = null) {
    this.value = value;
    this.type = type;
    this.next = next;
  }
}

class AnimalShelter {
  constructor() {
    this.dogs = null;
    this.cats = null;
  }

  enqueue(value, type) {
    if(value) {
      const animalShelter = new Node(value, type);
      let current;
      if(animalShelter.type === 'dog') {
        current = this.dogs;
        if(!current) {
          this.dogs = animalShelter;
          return;
        }
        while(current.next) {
          current = current.next;
        }
        current.next = animalShelter;
        return;
      }

      if(animalShelter.type === 'cat') {
        current = this.cats;
        if(!current) {
          this.cats = animalShelter;
          return;
        }
        while(current.next) {
          current = current.next;
        }
        current.next = animalShelter;
        return;
      }
      return 'Here we have dogs and cats';
    }

  }

  dequeue(pref) {
    if(pref !== 'dog' && pref !== 'cat') {
      return null;
    }

    if(pref === 'dog') {
      if(!this.dogs) {
        return 'There is no dog here';
      }
      const removedAnimal = this.dogs.value;
      this.dogs = this.dogs.next;
      return removedAnimal;
    }

    if(pref === 'cat') {
      if(!this.cats) {
        return 'There is no cat here';
      }
      const removedAnimal = this.cats.value;
      this.cats = this.cats.next;
      return removedAnimal;
    }
  }

}

module.exports = AnimalShelter;
