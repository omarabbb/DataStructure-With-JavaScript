class Node {
  constructor(data) {
    this.data = data;
    this.nextNode = null;
  }
}

/**
 * Represents a linked list data structure.
 */
class LinkedList {
  constructor() {
    this.headNode = null;
  }

  // Push Elements To LinkedList
  pushIntoList(data) {
    const newNode = new Node(data);
    let currentNode = this.headNode;

    if (this.headNode == null) {
      this.headNode = newNode;
    } else {
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }

      currentNode.nextNode = newNode;
    }
  }

  // Push Into Head
  pushIntoHead(data) {
    const newNode = new Node(data);

    newNode.nextNode = this.headNode;
    this.headNode = newNode;
  }

  // Insertion After Node
  insertAfter(node, data) {
    let currentNode = this.findNode(node);

    if (currentNode === null) {
      return null;
    } else {
      if (currentNode.nextNode === null) {
        this.pushIntoList(data);
      } else {
        const newNode = new Node(data);

        newNode.nextNode = currentNode.nextNode;
        currentNode.nextNode = newNode;
      }
    }
  }

  // Deletion Process
  deleteNode(data) {
    let currentNode = this.findNode(data);
    let parentNode = this.findNodeParent(data);

    if (currentNode === this.headNode) {
      this.headNode = this.headNode.nextNode;
    } else {
      if (currentNode.nextNode === null) {
        parentNode.nextNode = null;
      } else {
        parentNode.nextNode = currentNode.nextNode;
      }
    }
  }

  // Search For Node
  findNode(data) {
    let currentNode = this.headNode;

    while (currentNode) {
      if (currentNode.data === data) {
        return currentNode;
      }
      currentNode = currentNode.nextNode;
    }
  }

  // Search For Node Parent
  findNodeParent(data) {
    let currentNode = this.headNode;

    while (currentNode.nextNode) {
      if (currentNode.nextNode.data === data) {
        return currentNode;
      }
      currentNode = currentNode.nextNode;
    }
  }

  // Count The Number of Elements in The Linkedlist
  calcLength() {
    let currentNode = this.headNode;
    let countNumber = 0;

    while (currentNode) {
      countNumber += 1;
      currentNode = currentNode.nextNode;
    }

    return countNumber;
  }

  // Display Linkedlist
  printList() {
    let currentNode = this.headNode;
    let outPut = "";

    while (currentNode) {
      outPut += `${currentNode.data} => `;
      currentNode = currentNode.nextNode;
    }

    return outPut;
  }

  // Clear LinkedList :Danger
  clearList() {
    this.headNode = null;
  }

  // More Function
  // Check If We Can Compare List With Another
  isIdentical(givenList) {
    let currentNode = this.headNode;
    let otherNode = givenList.headNode;

    while (currentNode != null && otherNode != null) {
      if (currentNode.data != otherNode.data) {
        return false;
      }

      currentNode = currentNode.nextNode;
      otherNode = otherNode.nextNode;
    }

    return true;
  }

  // Find The Middle Element
  findMiddleElement() {
    let fastNode = this.headNode;
    let slowNode = this.headNode;

    if (this.headNode != null) {
      while (fastNode != null && fastNode.nextNode != null) {
        fastNode = fastNode.nextNode.nextNode;
        slowNode = slowNode.nextNode;
      }

      return slowNode.data;
    }
  }
}

module.exports = LinkedList;
