const LinkedList = require("./LinkedList");

/**
 * Represents a stack data structure.
 */
class Stack {
  constructor() {
    this.dataStore = new LinkedList();
  }

  push(element) {
    this.dataStore.insertLast(element);
  }

  pop() {
    this.dataStore.removeNode(this.dataStore.tailNode.data);
  }

  peek() {
    return this.dataStore.tailNode.data;
  }

  isEmpty() {
    return this.dataStore.length === 0;
  }

  clear() {
    this.dataStore = new LinkedList();
  }

  print() {
    this.dataStore.displayList();
  }

  size() {
    return this.dataStore.length;
  }
}
