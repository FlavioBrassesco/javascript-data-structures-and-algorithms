class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class HashTableLinearProbing {
  table = [];

  put(key, value) {
    let position = this.loseLoseHashCode(key);

    // check for null & undefined. If null or undefined we can write value.
    while (this.table[position] != undefined) {
      position++;
    }
    this.table[position] = new ValuePair(key, value);

    return true;
  }

  get(key) {
    let position = this.loseLoseHashCode(key);

    if (this.table[position] != undefined && this.table[position].key === key)
      return this.table[position].value;

    // only follow if not undefined (null is ok) and key !== key. If null is present if means that
    // the chain of collisions follow. If undefined present it means that we found
    // the end of the chain of collisions
    while (this.table[position] !== undefined) {
      if (this.table[position]?.key === key) break;
      position++;
    }
    // we check if we ended in undefined or the correct value
    return this.table[position]?.key === key
      ? this.table[position].value
      : null;
  }

  remove(key) {
    let position = this.loseLoseHashCode(key);

    if (this.table[position] != undefined && this.table[position].key === key) {
      this.table[position] = null; // important to not break collision chain continuity
      return true;
    }

    // only follow if not undefined (null is ok) and key !== key
    while (this.table[position] !== undefined) {
      if (this.table[position]?.key === key) break;
      position++;
    }

    if (this.table[position]?.key === key) {
      this.table[position] = null; // same as before
      return true;
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

module.exports = HashTableLinearProbing;
