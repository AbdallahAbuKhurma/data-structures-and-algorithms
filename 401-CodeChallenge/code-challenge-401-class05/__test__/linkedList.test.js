'use strict';

const LinkedList = require('../linkedList');

describe('linked list', () => {
  it('should instantiate', () => {
    const ll = new LinkedList();
    expect(ll).toBeDefined();
    expect(ll.head).toBeNull();
  });
});

describe('insert method', () => {
  it('should add to empty list', () => {
    const ll = new LinkedList();
    ll.insert('a');
    expect(ll.head.value).toEqual('a');
    expect(ll.head.next).toBeNull();
  });
  it('should add to a list with values', () => {
    const ll = new LinkedList();
    ll.insert('a');
    ll.insert('b');
    expect(ll.head.value).toEqual('b');
    expect(ll.head.next.value).toEqual('a');
  });
});


describe('includes', () => {
  it('should return true if target value is present ', () => {
    const ll = new LinkedList();
    ll.insert(3);
    ll.insert(2);
    ll.insert(1);
    expect(ll.includes(3)).toBeTruthy();
  });
  it('should return false if target value is not present ', () => {
    const ll = new LinkedList();
    ll.insert(3);
    ll.insert(2);
    ll.insert(1);
    expect(ll.includes(3)).toBeTruthy();
    expect(ll.includes(6)).toEqual(false);
  });
});

describe('toString', () => {
  it('to string', () => {
    const ll = new LinkedList();
    ll.insert(3);
    ll.insert(2);
    ll.insert(1);
    expect(ll.toString()).toEqual('{ 1 } -> { 2 } -> { 3 } -> NULL');
  });
});


describe('append to the end of the list', () => {
  it('append test', () => {
    const ll = new LinkedList();
    ll.append('a');
    expect(ll.head.value).toEqual('a');
    ll.append('b');
    expect(ll.head.value).toEqual('a');
  });
  it('should append to list with values', () => {
    const ll = new LinkedList();
    ll.append('a');
    ll.append('b');
    ll.append('c');
    expect(ll.head.value).toEqual('a');
    expect(ll.head.next.value).toEqual('b');
    expect(ll.head.next.next.value).toEqual('c');
    expect(ll.head.next.next.next).toBeNull();
  });
});
