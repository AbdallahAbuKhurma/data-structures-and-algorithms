const Node = require('../hash-tables').Node;
// const LinkedList = require('../hash-tables').LinkedList;
const HashTable = require('../hash-tables').HashTable;
const BinaryTree = require ('../../trees/binaryTrees');

describe('hash tables', () => {
  it('Adding a key/value to your hashtable results in the value being in the data structure', () => {
    const hashTable = new HashTable(3000);
    hashTable.add('junior', 500);
    expect(hashTable.contain('junior')).toBeTruthy();
  });

  it('Retrieving based on a key returns the value stored', () => {
    const hashTable = new HashTable();
    hashTable.add('junior', 500);
    expect(hashTable.get('junior')).toEqual(500);
  });

  it('Successfully returns null for a key that does not exist in the hashtable', () => {
    const hashTable = new HashTable();
    expect(hashTable.get('abdallah')).toBe(null);
  });

  it('Successfully handle a collision within the hashtable', () => {
    const hashTable = new HashTable(3000);
    hashTable.add('junior', 500);
    hashTable.add('jnuoir', 700);
    expect(hashTable.get('junior')).toEqual(500);
    expect(hashTable.get('jnuoir')).toEqual(700);
  });

  it('Successfully hash a key to an in-range value', () => {
    const hashTable = new HashTable(3000);
    hashTable.add('junior', 500);
    expect(hashTable.hash('junior')).toEqual(597);
  });
});

describe('repeated word function', () => {
  it('should return the repeated word which is (summer)', () => {
    const hashTable = new HashTable(3000);
    const string = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';
    expect(hashTable.repeatedWord(string)).toBe('summer');
  });

  it('should return the repeated word which is ( a letter )', () => {
    const hashTable = new HashTable(3000);
    const string = 'Once upon a time, there was a brave princess who...';
    expect(hashTable.repeatedWord(string)).toBe('a');
  });

  it('should return the null if there is no string', () => {
    const hashTable = new HashTable(3000);
    const string = '';
    expect(hashTable.repeatedWord(string)).toBe(null);
  });
});


describe('tree intersection',() =>{
  it ('should return the dublicated nodes in tree1 and tree2',() =>{
    const hashTable = new HashTable(3000);

    const tree1 = new BinaryTree();
    tree1.root = new Node(150);
    tree1.root.left = new Node(100);
    tree1.root.left.left = new Node(75);
    tree1.root.left.right = new Node(160);
    tree1.root.left.right.left = new Node(125);
    tree1.root.left.right.right = new Node(175);
    tree1.root.right = new Node(250);
    tree1.root.right.left = new Node(200);
    tree1.root.right.right = new Node(350);
    tree1.root.right.right.left = new Node(300);
    tree1.root.right.right.right = new Node(500);

    const tree2 = new BinaryTree();
    tree2.root = new Node(42);
    tree2.root.left = new Node(100);
    tree2.root.left.left = new Node(15);
    tree2.root.left.right = new Node(160);
    tree2.root.left.right.left = new Node(125);
    tree2.root.left.right.right = new Node(175);
    tree2.root.right = new Node(600);
    tree2.root.right.left = new Node(200);
    tree2.root.right.right = new Node(350);
    tree2.root.right.right.left = new Node(4);
    tree2.root.right.right.right = new Node(500);
    expect(hashTable.treeIntersection(tree1, tree2)).toEqual([100,160,125,175,200,350,500]);
  });

  it('should return null if there are no dublicated values',()=>{
    const hashTable = new HashTable(3000);

    const tree1 = new BinaryTree();
    tree1.root = new Node(100);
    tree1.root.left = new Node(150);
    tree1.root.right = new Node(200);

    const tree2 = new BinaryTree();
    tree2.root = new Node(250);
    tree2.root.left = new Node(300);
    tree2.root.right = new Node(350);
    expect(hashTable.treeIntersection(tree1, tree2)).toBe(null);
  });
});
