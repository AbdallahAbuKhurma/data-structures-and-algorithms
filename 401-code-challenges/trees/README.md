# Trees
>
## challenge

1. Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.

2. Create a Binary Tree class
  
    * Define a pre order method for traversing the tree.
  
    * Define a in order method for traversing the tree.
  
    * Define a post order method for traversing the tree.

3. Create a Binary Search Tree class

    * Create an add method to insert in the tree in right location

    * Create a contains method to search for values in tree.

## Approach & Efficiency

### Space

* add - O(n)

* contains - O(1)

### Time

* add - O(n)

* contains - O(h) where h is the hight of tree.

## whiteboard

![tress](./trees.png)

---

## Code challenge 16: Get Max Value Of The Tree

### challange

To create a finction that holds no arreguments and to return the maximum value in the tree

### Efficiency

1. Space => O(n)

2. Time => O(n)

### whiteboard

![getmax](./getmax.png)

## Code challenge 17: Breadth first

## challenge

to craete a function called breadth first that holds a tree as an aregument and its job to return list of values in the tree, in the order they were encountered.

### Efficiency

1. Space => O(n)

2. Time => O(n)

### whiteboard

![breadth](./breadth.png)

## Code challenge 18: FizzBuzz Tree

## challenge

Conduct “FizzBuzz” on a binaryTree while traversing through it. Change the values of each of the nodes dependent on the current node’s value

## Approach & Efficiency

* Write a function called FizzBuzzTree which takes a binaryTree as an argument.
* Without utilizing any of the built-in methods available to your language, determine weather or not the value of each node is divisible by 3, 5 or both, and change the value of each of the nodes:

    * If the value is divisible by 3, replace the value with “Fizz”

    * If the value is divisible by 5, replace the value with “Buzz”

    * If the value is divisible by 3 and 5, replace the value with “FizzBuzz” Return the binaryTree with its new values.

1. Space => O(n)

2. Time => O(n)

### whiteboard

![fizzbuzz](./fizzbuzz.png)
