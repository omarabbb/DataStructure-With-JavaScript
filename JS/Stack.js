const LinkedList = require("./LinkedList");

class Stack {
  constructor() {
    this.dataStore = new LinkedList();
  }

  push(data) {
    this.dataStore.pushIntoHead(data);
  }

  pop() {
    this.dataStore.deleteNode(this.dataStore.headNode.data);
  }

  peek() {
    return this.dataStore.headNode;
  }

  printStack() {
    return this.dataStore.printList();
  }

  isEmpty() {
    return this.dataStore.hasData() ? false : true;
  }
}

module.exports = Stack;
