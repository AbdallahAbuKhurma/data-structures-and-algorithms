'use strict';

const BinaryTree = require('../binaryTrees');
const Node = require('../node');

describe('Binary Tree', () => {
  let tree;
  beforeAll(() => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);
    const seven = new Node(7);
    const eight = new Node(8);
    const nine = new Node(9);
    one.left = two;
    one.right = three;
    two.left = six;
    three.left = four;
    three.right = five;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    tree = new BinaryTree(one);
  });
  // root - left - right
  it('preorder', () => {
    let expectedArr = [1, 2, 6, 7, 8, 9, 3, 4, 5];
    expect(tree.preOrder()).toEqual(expectedArr);
  });
  // left - root - right
  it('inorder', () => {
    let expected = [6, 8, 7, 9, 2, 1, 4, 3, 5];
    expect(tree.inOrder()).toEqual(expected);
  });
  // left - right -root
  it('postorder', () => {
    let expected = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    expect(tree.postOrder()).toEqual(expected);
  });
});

describe('getMaxValue of the binary tree', () => {
  let tree;
  beforeAll(() => {
    tree = new BinaryTree();
    let node1 = new Node(5);
    let node2 = new Node(3);
    let node3 = new Node(17);
    let node4 = new Node(25);
    let node5 = new Node(11);

    tree.root = node1;
    tree.root.right = node2;
    tree.root.right.left = node3;
    tree.root.left = node4;
    tree.root.left.right = node5;
  });
  it('should return the maximum value in the tree', () => {
    expect(tree.getMaxValue()).toEqual(25);
  });
  it('should return an error if there is no root', () => {
    let tree = new BinaryTree();
    expect(tree.getMaxValue()).toBe('empty tree');
  });
});

describe('tree breadth fisrt', () => {
  it('should return list of values in the tree in the order they were encoumtred', () => {
    let tree = new BinaryTree();
    tree.root = new Node(2);
    tree.root.left = new Node(7);
    tree.root.left.left = new Node(2);
    tree.root.left.right = new Node(6);
    tree.root.left.right.left = new Node(5);
    tree.root.left.right.right = new Node(11);
    tree.root.right = new Node(5);
    tree.root.right.right = new Node(9);
    tree.root.right.right.left = new Node(4);
    expect(tree.breadthFirst()).toEqual([2,7,5,2,6,9,5,11,4]);
  });
  it('should return an error if there is no root', () => {
    let tree = new BinaryTree();
    expect(tree.breadthFirst()).toBe('empty tree');
  });
});

describe('FIZZBUZZ TREE', () => {
  it('shoud return Fizz if the value is devidable by 3', () => {
    let tree = new BinaryTree;
    tree.root = new Node(3);
    tree.root.right = new Node(6);
    tree.root.left = new Node(9);
    expect(tree.treeFizzBuzz()).toEqual(['Fizz','Fizz','Fizz']);
  });
  it('shoud return Buzz if the value is devidable by 5', () => {
    let tree = new BinaryTree;
    tree.root = new Node(5);
    tree.root.right = new Node(10);
    tree.root.left = new Node(20);
    expect(tree.treeFizzBuzz()).toEqual(['Buzz','Buzz','Buzz']);
  });
  it('shoud return FizzBuzz if the value is devidable by 15', () => {
    let tree = new BinaryTree;
    tree.root = new Node(15);
    tree.root.right = new Node(30);
    tree.root.left = new Node(45);
    expect(tree.treeFizzBuzz()).toEqual(['FizzBuzz','FizzBuzz','FizzBuzz']);
  });
  it('should return Fizz Buzz Tree', () => {
    let tree = new BinaryTree();
    tree.root = new Node(2);
    tree.root.left = new Node(3);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(6);
    tree.root.left.right.left = new Node(5);
    tree.root.left.right.right = new Node(15);
    tree.root.right = new Node(10);
    tree.root.right.right = new Node(45);
    tree.root.right.right.left = new Node(4);
    expect(tree.treeFizzBuzz()).toEqual(['2','Fizz','1','Fizz','Buzz','FizzBuzz','Buzz','FizzBuzz','4']);
  });
});

