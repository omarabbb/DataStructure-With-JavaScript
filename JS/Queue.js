const LinkedList = require("./LinkedList.js");

class Queue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(value) {
    this.list.pushIntoList(value);
  }

  dequeue() {
    if (!this.list.hasData()) {
      throw new Error("Queue is empty");
    }
    return this.list.deleteNode(this.list.headNode.data);
  }

  peek() {
    if (!this.list.hasData()) {
      throw new Error("Queue is empty");
    }
    return this.list.headNode.data;
  }

  isEmpty() {
    return !this.list.hasData();
  }

  size() {
    return this.list.calcLength();
  }

  print() {
    return this.list.printList();
  }
}

const myQ = new Queue();

module.exports = Queue;
