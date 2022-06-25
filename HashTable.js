class HashTable {
  table = [];

  put(key, value) {
    let position = this.loseLoseHashCode(key);
    this.table[position] = value;
    return true;
  }

  get(key) {
    let position = this.loseLoseHashCode(key);
    return this.table[position];
  }

  remove(key) {
    let position = this.loseLoseHashCode(key);
    this.table[position] = undefined;
    return true;
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
module.exports = HashTable;