const LinkedList = require("./LinkedList");

class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class HashTableSeparateChaining {
  table = [];

  put(key, value) {
    let position = this.loseLoseHashCode(key);

    if (this.table[position] == undefined) {
      this.table[position] = new LinkedList();
    }

    this.table[position].append(new ValuePair(key, value));
    return true;
  }

  get(key) {
    let position = this.loseLoseHashCode(key);

    if (this.table[position] !== undefined) {
      let current = this.table[position].head;

      while (current) {
        if (current.element.key === key) return current.element.value;
        current = current.next;
      }
    }

    return undefined;
  }

  remove(key) {
    let position = this.loseLoseHashCode(key);

    if (this.table[position] !== undefined) {
      let current = this.table[position].head;

      while (current) {
        if (current.element.key === key) {
          this.table[position].remove(current.element);
          return true;
        }
        current = current.next;
      }
    }

    return false;
  }
  
  // simple hash to test collisions
  loseLoseHashCode(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  }
}

module.exports = HashTableSeparateChaining;
