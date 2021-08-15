// const Node = require('../hash-tables').Node;
// const LinkedList = require('../hash-tables').LinkedList;
const HashTable = require('../hash-tables').HashTable;

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
