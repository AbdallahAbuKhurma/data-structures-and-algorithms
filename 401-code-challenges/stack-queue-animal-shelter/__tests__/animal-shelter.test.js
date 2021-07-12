'use strict';
const AnimalShelter = require('../animal-shelter');

describe('Animal shelter functionalty', () => {

  describe('creatation of animal shelter', () => {
    it('shoud create empty animal shelter', ()=>{
      const animalSelter = new AnimalShelter();
      expect(animalSelter).toBeDefined();
      expect(animalSelter.dogs).toBeDefined();
      expect(animalSelter.cats).toBeDefined();
    });
    it('shoud enqueue a cat or a dog to onto the list',()=>{
      const animalSelter = new AnimalShelter();
      animalSelter.enqueue('sherazi', 'cat');
      animalSelter.enqueue('hasky', 'dog');
      expect(animalSelter.cats.value).toBe('sherazi');
      expect(animalSelter.dogs.value).toBe('hasky');
    });

    it('should enqueue multiple cats or dogs',()=>{
      const animalSelter = new AnimalShelter();
      animalSelter.enqueue('1', 'cat');
      animalSelter.enqueue('2', 'cat');
      animalSelter.enqueue('1', 'dog');
      animalSelter.enqueue('2', 'dog');
      expect(animalSelter.cats.value).toEqual('1');
      expect(animalSelter.cats.next.value).toEqual('2');
      expect(animalSelter.dogs.value).toEqual('1');
      expect(animalSelter.dogs.next.value).toEqual('2');
    });
  });
  it('should dequeue dogs or cats and to return empty list',()=>{
    const animalSelter = new AnimalShelter();
    animalSelter.enqueue('1', 'cat');
    animalSelter.enqueue('1', 'dog');
    expect(animalSelter.dequeue('cat')).toEqual('1');
    expect(animalSelter.dequeue('dog')).toEqual('1');
    expect(animalSelter.cats).toBeNull();
    expect(animalSelter.dogs).toBeNull();
  });

  it('can\'t return with wrong preference',()=>{
    const animalSelter = new AnimalShelter();
    expect(animalSelter.dequeue('bessa')).toBeNull();
    expect(animalSelter.dequeue('cat')).toEqual('There is no cat here');
    expect(animalSelter.dequeue('dog')).toEqual('There is no dog here');
  });
});


