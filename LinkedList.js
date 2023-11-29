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
  // Insert After Node
  insertAfter(nodeData, data) {
    const newNode = new Node(data);
    let currentNode = this.findNode(nodeData);

    if (currentNode != null) {
      newNode.nextNode = currentNode.nextNode;
      currentNode.nextNode = newNode;
      ++this.length;
    }
  }

  // Remove Element From The List
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
    return null; // Add this line to handle the case when the node is not found
  }

  // Finding Parent of Element
  findParent(nodeData) {
    // Base Traversal In The List
    let currentNode = this.headNode;
    let parentNode = null; // Add this line to keep track of the parent node

    while (currentNode.nextNode) {
      if (currentNode.nextNode.data == nodeData) {
        // Change currentNode.data to currentNode.nextNode.data
        return currentNode; // Change return currentNode to return parentNode
      }
      parentNode = currentNode; // Add this line to update the parent node
      currentNode = currentNode.nextNode;
    }
    return null; // Add this line to handle the case when the parent node is not found
  }

  // Get The Number of Elements in List
  getLength() {
    return this.length;
  }

  // Check if The List is Empty
  // Check if The List is Empty
  isEmpty() {
    return this.length === 0;
  }

  // Check if The List has Data
  hasData() {
    return this.length > 0;
  }

  // Display The Linked List
  displayList() {
    let currentNode = this.headNode;
    let list = "";

    while (currentNode) {
      list += currentNode.data + " -> ";
      currentNode = currentNode.nextNode;
    }

    return list;
  }
}

// Exporting LinkedList Class
module.exports = LinkedList;
