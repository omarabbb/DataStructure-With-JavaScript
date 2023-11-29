// Creating Node Class
class Node {
  constructor(data) {
    this.data = data;
    this.nextNode = null;
  }
}

// Creating LinkedList Class
class LinkedList {
  // Head = {data : _data, nextNode : [object]}
  constructor() {
    this.headNode = null;
    this.tailNode = null;
    this.length = 0;
  }

  // Adding Elements at The Ending Of The List
  insertLast(data) {
    // Creating New Node
    const newNode = new Node(data);

    if (this.headNode == null) {
      this.headNode = newNode;
      this.tailNode = newNode;
    } else {
      this.tailNode.nextNode = newNode;
      this.tailNode = newNode;
    }

    // Increase Number of Elements Elements
    ++this.length;
  }

  // Change The Head Element
  insertHead(data) {
    // Creating New Node
    const newNode = new Node(data);

    newNode.nextNode = this.headNode;
    this.headNode = newNode;

    ++this.length;
  }

  // Insert After Node
  insertAfter(nodeData, data) {
    const newNode = new Node(data);
    let currentNode = this.findNode(nodeData);

    if (currentNode != null) {
      newNode.nextNode = currentNode.nextNode;
      currentNode.nextNode = newNode;
    }

    ++this.length;
  }

  // Remove Elmement From The List
  removeNode(data) {
    // Finding The Node
    let currentNode = this.findNode(data);
    let parentNode = this.findParent(data);

    if (currentNode != null) {
      // If The Node is The Head
      if (currentNode == this.headNode) {
        this.headNode = currentNode.nextNode;
      } else {
        parentNode.nextNode = currentNode.nextNode;
      }
      --this.length;
    }
  }

  // Finding Element
  findNode(nodeData) {
    // Base Traversal In The List
    let currentNode = this.headNode;

    while (currentNode) {
      if (currentNode.data == nodeData) {
        return currentNode;
      }
      currentNode = currentNode.nextNode;
    }
  }

  // Finding Parent of Element
  findParent(nodeData) {
    // Base Traversal In The List
    let currentNode = this.headNode;

    while (currentNode.nextNode) {
      if (currentNode.data == nodeData) {
        return currentNode;
      }
      currentNode = currentNode.nextNode;
    }
  }

  // Get The Number of Elements in List
  getLength() {
    return this.length;
  }

  // Check if The List is Empty
  isEmpty() {
    return this.length == 0 ? true : false;
  }

  // Check if The List has Data
  hasData() {
    return this.length > 0 ? true : false;
  }

  // Display The Linked List
  displayList() {
    let currentNode = this.headNode;
    let list = "";

    while (currentNode) {
      list += currentNode.data + " -> ";
      currentNode = currentNode.nextNode;
    }

    console.log(list);
  }
}

// Exporting LinkedList Class
module.exports = LinkedList;
