function djb2HashCode(key) {
  let hash = 5381; // prime number
  for (let i = 0; i < key.length; i++) {
    hash = hash * 33 + key.charCodeAt(i);
  }
  return hash % 1013; // for a hash table not larger than 1000
}
module.exports = djb2HashCode;
