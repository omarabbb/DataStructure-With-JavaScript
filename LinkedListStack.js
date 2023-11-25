const LinkedList = require("./LinkedList");

class Stack {
  constructor() {
    this.dataStore = new LinkedList();
  }

  push(element) {
    this.dataStore.addToHead(element);
  }

  pop() {
    return this.dataStore.deleteHead();
  }

  peek() {
    return this.dataStore.headNode.data;
  }

  isEmpty() {
    return this.dataStore.length === 0;
  }

  length() {
    return this.dataStore.length;
  }

  clear() {
    this.dataStore.headNode = null;
    this.dataStore.tailNode = null;
    this.dataStore.length = 0;
  }

  print() {
    return this.dataStore.displayList();
  }
}

// Test Area
const myStack = new Stack();
