'use strict';

class BinaryTree {
  constructor(root){
    this.root = root;
  }

  preOrder() {
    try {
      if(!this.root) {
        throw new Error('empty tree');
      }
      const result = [];
      const _traverse = (node) => {
        result.push(node.value);
        if(node.left) {
          _traverse(node.left);
        }
        if(node.right) {
          _traverse(node.right);
        }
      };
      _traverse(this.root);
      return result;
    } catch (error) {
      console.error({message: error.message});
    }
  }

  postOrder() {
    try {
      if(!this.root) {
        throw new Error('empty tree');
      }
      const result = [];
      const _traverse = (node) => {
        if(node.left) {
          _traverse(node.left);
        }
        if(node.right) {
          _traverse(node.right);
        }
        result.push(node.value);
      };
      _traverse(this.root);
      return result;
    } catch (error) {
      console.error({message: error.message});
    }
  }

  inOrder() {
    try {
      if(!this.root) {
        throw new Error('empty tree');
      }
      const result = [];
      const _traverse = (node) => {
        if(node.left) {
          _traverse(node.left);
        }
        result.push(node.value);
        if(node.right) {
          _traverse(node.right);
        }
      };
      _traverse(this.root);
      return result;
    } catch (error) {
      console.error({message: error.message});
    }
  }

  getMaxValue(){
    try {
      if(!this.root){
        return ('empty tree');
      }
      let maxValue = this.root.value;
      const _traverse = (node) => {
        if(node.value >= maxValue){
          maxValue = node.value;
        }
        if(node.right){
          _traverse(node.right);
        }
        if(node.left){
          _traverse(node.left);
        }
      };
      _traverse(this.root);
      return maxValue;

    } catch (error) {
      console.error({message: error.message});
    }
  }

}

module.exports = BinaryTree;
