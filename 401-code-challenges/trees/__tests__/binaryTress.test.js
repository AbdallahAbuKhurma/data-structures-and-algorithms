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
