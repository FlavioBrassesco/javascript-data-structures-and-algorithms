export default class Queue {
  items = [];

  enqueue(element) {
    return this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  isEmpty() {
    return !Boolean(this.items.length);
  }

  size() {
    return this.items.length;
  }
}
