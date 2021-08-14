'use strict';

class BinaryTree {
  constructor(root) {
    this.root = root;
  }

  preOrder() {
    try {
      if (!this.root) {
        throw new Error('empty tree');
      }
      const queue = [];
      const _traverse = (node) => {
        queue.push(node.value);
        if (node.left) {
          _traverse(node.left);
        }
        if (node.right) {
          _traverse(node.right);
        }
      };
      _traverse(this.root);
      return queue;
    } catch (error) {
      console.error({ message: error.message });
    }
  }

  postOrder() {
    try {
      if (!this.root) {
        throw new Error('empty tree');
      }
      const queue = [];
      const _traverse = (node) => {
        if (node.left) {
          _traverse(node.left);
        }
        if (node.right) {
          _traverse(node.right);
        }
        queue.push(node.value);
      };
      _traverse(this.root);
      return queue;
    } catch (error) {
      console.error({ message: error.message });
    }
  }

  inOrder() {
    try {
      if (!this.root) {
        throw new Error('empty tree');
      }
      const queue = [];
      const _traverse = (node) => {
        if (node.left) {
          _traverse(node.left);
        }
        queue.push(node.value);
        if (node.right) {
          _traverse(node.right);
        }
      };
      _traverse(this.root);
      return queue;
    } catch (error) {
      console.error({ message: error.message });
    }
  }

  getMaxValue() {
    try {
      if (!this.root) {
        return 'empty tree';
      }
      let maxValue = this.root.value;
      const _traverse = (node) => {
        if (node.value >= maxValue) {
          maxValue = node.value;
        }
        if (node.right) {
          _traverse(node.right);
        }
        if (node.left) {
          _traverse(node.left);
        }
      };
      _traverse(this.root);
      return maxValue;
    } catch (error) {
      console.error({ message: error.message });
    }
  }

  breadthFirst(tree) {
    try {
      if (!this.root) {
        return 'empty tree';
      }
      let queue = [];
      let results = [];
      tree = this.root;
      queue.push(tree);

      const _traverse = (node) => {
        while (queue.length > 0) {
          node = queue[0];
          results.push(node.value);
          if (node.left !== null) {
            queue.push(node.left);
          }
          if (node.right !== null) {
            queue.push(node.right);
          }
          queue.shift();
        }
      };
      _traverse(tree);
      return results;
    } catch (error) {
      console.error({ message: error.message });
    }
  }

  treeFizzBuzz(tree) {
    if (!this.root) {
      return 'Empty Tree';
    }
    tree = this.root;
    const results = [];
    const _traverse = (node) => {
      if (node.value % 15 === 0) {
        node.value = 'FizzBuzz';
        results.push(node.value);
      } else if (node.value % 5 === 0) {
        node.value = 'Buzz';
        results.push(node.value);
      } else if (node.value % 3 === 0) {
        node.value = 'Fizz';
        results.push(node.value);
      } else {
        node.value = `${node.value}`;
        results.push(node.value);
      }
      if (node.left !== null) {
        _traverse(node.left);
      }
      if (node.right !== null) {
        _traverse(node.right);
      }
    };
    _traverse(tree);
    return results;
  }
}
module.exports = BinaryTree;
