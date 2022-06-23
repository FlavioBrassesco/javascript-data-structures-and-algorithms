class Node {
  constructor(element, previous, next) {
    this.element = element;
    this.previous = previous;
    this.next = next;
  }
}

export default class DoublyLinkedList {
  head = null;
  tail = null;
  length = 0;

  init(element) {
    this.head = new Node(element, null, null);
    this.tail = this.head;
    this.length++;
    return this.head;
  }

  append(element) {
    if (this.head === null) return this.init(element);

    this.tail.next = new Node(element, this.tail, null);
    this.tail = this.tail.next;
    this.length++;
    return this.tail;
  }

  prepend(element) {
    if (this.head === null) return this.init(element);

    this.head.previous = new Node(element, null, this.head);
    this.head = this.head.previous;
    this.length++;
    return this.head;
  }

  insert(element, index) {
    if (index <= 0) return this.prepend(element);
    if (index >= this.length) return this.append(element);

    let current;
    if (index <= Math.floor(this.length / 2)) {
      current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = 0; i < this.length - index - 1; i++) {
        current = current.previous;
      }
    }

    const node = new Node(element, current.previous, current);
    current.previous.next = node;
    current.previous = node;
    this.length++;
    return node;
  }

  indexOf(element) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.element === element) return index;
      current = current.next;
      index++;
    }

    return null;
  }

  removeAt(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) {
      const current = this.head;
      this.head.next.previous = null;
      this.head = this.head.next;
      this.length--;
      return current;
    }
    if (index === this.length - 1) {
      const current = this.tail;
      this.tail.previous.next = null;
      this.tail = this.tail.previous;
      this.length--;
      return current;
    }
    
    let current;
    if (index <= Math.floor(this.length / 2)) {
      current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = 0; i < this.length - index - 1; i++) {
        current = current.previous;
      }
    }

    current.previous.next = current.next;
    current.next.previous = current.previous;
    this.length--;
    return current;
  }

  remove(element) {
    return this.removeAt(this.indexOf(element));
  }

  isEmpty() {
    return !Boolean(this.length);
  }

  size() {
    return this.length;
  }

  toString() {
    let string = "";
    let current = this.head;
    while (current) {
      string += current.element.toString();
      current = current.next;
    }
    return string;
  }
}
