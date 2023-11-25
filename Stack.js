class Stack {
  constructor() {
    this.dataStore = [];
  }

  push(element) {
    this.dataStore.push(element);
  }

  pop() {
    return this.dataStore.pop();
  }

  peek() {
    return this.dataStore[this.dataStore.length - 1];
  }

  isEmpty() {
    return this.dataStore.length === 0;
  }

  length() {
    return this.dataStore.length;
  }

  clear() {
    this.dataStore = [];
  }

  print() {
    return this.dataStore.join(" ");
  }
}
