// javascript already has a Set class, this is to know the inner workings
export default class Set {
  set = {};
  size = 0; // size can also be fetched with Object.keys(set).length

  add(element) {
    if (!this.set[element]) {
      this.set[element] = element;
      this.size++;
      return true;
    }
    return false;
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
    return true;
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

  union(otherSet) {
    const newSet = new Set();
    const values = Object.keys(this.set);
    const otherValues = Object.keys(otherSet.set);

    for (let i = 0; i < values.length; i++) {
      newSet.add(values[i]);
    }
    for (let i = 0; i < otherValues.length; i++) {
      newSet.add(otherValues[i]);
    }

    return newSet;
  }

  intersection(otherSet) {
    const newSet = new Set();
    const values = Object.keys(this.set);

    for (let i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) newSet.add(values[i]);
    }

    return newSet;
  }

  difference(otherSet) {
    const newSet = new Set();
    const values = Object.keys(this.set);

    for (let i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) newSet.add(values[i]);
    }

    return newSet;
  }

  symmetricDifference(otherSet) {
    const newSet = new Set();
    const values = Object.keys(this.set);
    const otherValues = Object.keys(otherSet.set);

    for (let i = 0; i < otherValues.length; i++) {
      if (!this.has(otherValues[i])) newSet.add(otherValues[i]);
    }
    for (let i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) newSet.add(values[i]);
    }

    return newSet;
  }

  subset(otherSet) {
    const otherValues = Object.keys(otherSet.set);
    for (let i = 0; i < otherValues.length; i++) {
      if (!this.has(otherValues[i])) return false;
    }
    return true;
  }
}
