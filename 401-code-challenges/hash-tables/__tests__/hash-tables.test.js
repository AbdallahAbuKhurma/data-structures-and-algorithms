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
