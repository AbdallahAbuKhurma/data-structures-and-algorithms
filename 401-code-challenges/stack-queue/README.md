# Stacks and Queues
>
`Stack` A stack is useful when we want to add elements inside a list into sequential order and remove the last element added.

`Queue` A queue is useful when we want the same behavior, but instead of removing the last added element, we want to remove the first element added to the list.

## Challenge

* To create a class called **Node** that holds two properties
  1. **Value**
  2. **Next**

* To create a class called **Stack** that holds one property and four methods

  **Properties**

    1. **Top**

  **Methods**

    `push` to add node to the end of the stack

    `pop` to remove a node from the end of the stack

    `peek` to retrun the top value of the stack

    `isEmpty` to check if the stack is empty or not

* To create a class called **Queue** that holds one property and four methods

  **Properties**

    1. **Front**

  **Methods**

    `enqueue` to add node to the end of the queue

    `dequeue` to remove a node from the front of the queue

    `peek` to retrun the front value of the queue

    `isEmpty` to check if the queue is empty or not

## Approach & Efficiency

* For both of the Stack and Queue The time performance was O(1) for all methods.

* For the Stack the space performance was O(n) for push and pop

* For the Queue the space performance was O(n) for enqueue and dequeue.

## API

**Stack:**

* New stack => const `name = new Stack()`

* Add a node to the end of the stack => `name.push(value)`

* Remove a node from the end of the stack => `name.pop()`

* Peek on the top value of the stack => `name.peek()`

* Check wether the stack is empty or not => `name.isEmpty()`

**Queue:**

* New queue => const `name = new Queue()`

* Add a node to the end of the queue => `name.enqueue(value)`

* Remove a node from the front of the queue => `name.dequeue()`

* Peek on the front value of the queue => `name.peek()`

* Check wether the queue is empty or not => `name.isEmpty()`
