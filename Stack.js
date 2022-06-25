class Stack {
  #items = [];

  push(element) {
    return this.#items.push(element);
  }

  pop() {
    return this.#items.pop();
  }

  peek() {
    return this.#items[this.#items.length - 1];
  }

  clear() {
    this.#items = [];
  }

  isEmpty() {
    return !Boolean(this.#items.length);
  }

  size() {
    return this.#items.length;
  }
}
module.exports = Stack;
