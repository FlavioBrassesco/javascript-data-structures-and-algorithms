class Dictionary {
  dict = {};

  set(key, value) {
    this.dict[key] = value;
  }

  get(key) {
    return this.has(key) ? this.dict[key] : undefined;
  }

  has(key) {
    return this.dict.hasOwnProperty(key);
  }

  delete(key) {
    if (this.has(key)) {
      return delete this.dict[key];
    }
    return false;
  }

  clear() {
    this.dict = {};
  }

  *keys() {
    for (let key in this.dict) {
      if (this.has(key)) yield key;
    }
  }

  *values() {
    for (let key in this.dict) {
      if (this.has(key)) yield this.dict[key];
    }
  }

  *entries() {
    for (let key in this.dict) {
      if (this.has(key)) yield [key, this.dict[key]];
    }
  }
}
module.exports = Dictionary;