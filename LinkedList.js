// Singly Linked List Impelmentation

class Node {
  constructor(data) {
    this.data = data;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.headNode = null;
    this.tailNode = null;
    this.length = 0;
  }

  // Add to the end of the list
  addToTail(_data) {
    const newNode = new Node(_data);

    if (!this.headNode) {
      this.headNode = newNode;
      this.tailNode = newNode;
    } else {
      this.tailNode.nextNode = newNode;
      this.tailNode = newNode;
    }

    ++this.length;
  }

  // Add to the beginning of the list
  addToHead(_data) {
    const newNode = new Node(_data);

    newNode.nextNode = this.headNode;
    this.headNode = newNode;

    ++this.length;
  }

  // Insert before a node
  insertBefore(node, _data) {
    const newNode = new Node(_data);
    const currentNode = this.findNodeParent(node);

    newNode.nextNode = currentNode.nextNode;
    currentNode.nextNode = newNode;

    if (newNode.nextNode === null) {
      this.tailNode = newNode;
    }

    ++this.length;
  }

  // Insert after a node
  insertAfter(node, _data) {
    const newNode = new Node(_data);
    const currentNode = this.findNode(node);

    newNode.nextNode = currentNode.nextNode;
    currentNode.nextNode = newNode;

    if (newNode.nextNode === null) {
      this.tailNode = newNode;
    }

    ++this.length;
  }

  // Delete a node
  deleteNode(node) {
    const currentNode = this.findNode(node);

    if (this.headNode === this.tailNode) {
      this.headNode = null;
      this.tailNode = null;
    } else if (this.headNode == currentNode) {
      this.headNode = currentNode.nextNode;
    } else {
      const parentNode = this.findNodeParent(node);

      if (this.tailNode === currentNode) {
        this.tailNode = parentNode;
      } else {
        parentNode.nextNode = currentNode.nextNode;
      }
    }

    --this.length;
  }

  // Delete the head node
  deleteHead() {
    if (this.headNode === null) {
      return;
    }

    this.deleteNode(this.headNode.data);
  }

  // Find a node
  findNode(_data) {
    let currentNode = this.headNode;
    while (currentNode != null) {
      if (currentNode.data == _data) {
        return currentNode;
      }
      currentNode = currentNode.nextNode;
    }
  }

  // Find the parent of a node
  findNodeParent(_data) {
    let currentNode = this.headNode;
    while (currentNode) {
      if (currentNode.nextNode.data == _data) {
        return currentNode;
      }

      currentNode = currentNode.nextNode;
    }
  }

  // Get the length of the list
  getLength() {
    return this.length;
  }

  // Check if the list is empty
  isEmpty() {
    return this.length ? false : true;
  }

  // Display the list
  displayList() {
    let currentNode = this.headNode;
    let outPut = "";

    while (currentNode) {
      outPut += `${currentNode.data} => `;
      currentNode = currentNode.nextNode;
    }

    return outPut;
  }
}

// Test Area
// Adding Some Test Cases
const myList = new LinkedList();
console.log(myList.isEmpty());
myList.addToTail(4);
myList.addToTail(3);
myList.addToTail(8);
myList.addToTail(12);
myList.addToHead(0);

console.log(myList.displayList());
myList.insertAfter(4, 2);
console.log(myList.displayList());
myList.insertBefore(4, 5);
console.log(myList.displayList());
myList.deleteHead();
console.log(myList.displayList());
myList.deleteNode(8);
console.log(myList.displayList());
console.log(myList.length);
console.log(myList.isEmpty());
