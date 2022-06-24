// javascript already has a Set class, this is to know the inner workings
export default class Set {
  set = {};
  size = 0;

  add(element) {
    if (!this.set[element]) {
      this.set[element] = element;
      this.size++;
    }
    return element;
  }

  delete(element) {
    if (delete this.set[element]) {
      this.size--;
      return true;
    }
    return false;
  }

  clear() {
    this.set = {};
    this.size = 0;
    return this.set;
  }

  *values() {
    for (let key in this.set) {
      yield this.set[key];
    }
  }

  size() {
    return this.size;
  }

  has(element) {
    return this.set.hasOwnProperty(element);
  }
}
