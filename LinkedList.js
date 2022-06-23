class Node {
  constructor(element, next) {
    this.element = element;
    this.next = next;
  }
}

export default class LinkedList {
  length = 0;
  head = null;
  tail = null;

  #init(element) {
    this.head = new Node(element, null);
    this.tail = this.head;
    this.length = 1;
    return this.head;
  }

  append(element) {
    if (this.head == null) return this.#init(element);
    const temp = this.tail;
    this.tail = new Node(element, null);
    temp.next = this.tail;
    this.length++;
    return this.tail;
  }

  prepend(element) {
    if (this.head == null) return this.#init(element);
    const temp = this.head;
    this.head = new Node(element, temp);
    this.length++;
    return this.head;
  }

  insert(element, index) {
    if (index <= 0) return this.prepend(element);
    if (index >= this.length) return this.append(element);

    let previous = null,
      current = this.head;
    for (let i = 0; i < index; i++) {
      previous = current;
      current = current.next;
    }

    previous.next = new Node(element, current);
    this.length++;
    return previous.next;
  }

  removeAt(index) {
    if (index >= this.length || index < 0) return null;
    if (index === 0) {
      const current = this.head;
      this.head = this.head.next;
      this.length--;
      return current;
    }

    let previous = null,
      current = this.head;
    for (let i = 0; i < index; i++) {
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
    this.length--;
    return current;
  }

  remove(element) {
    return this.removeAt(this.indexOf(element));
  }

  indexOf(element) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.element === element) return index;
      current = current.next;
      index++;
    }

    return -1;
  }

  isEmpty() {
    return !Boolean(this.length);
  }

  size() {
    return this.length;
  }

  toString() {
    let current = this.head;
    let string = "";

    while (current) {
      string += current.element.toString();
      current = current.next;
    }
    return string;
  }
}
