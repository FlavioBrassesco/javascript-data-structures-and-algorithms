const BinarySearchTree = require("./BinarySearchTree");

const tree = new BinarySearchTree();

tree.insert(11);
tree.insert(7);
tree.insert(5);
tree.insert(9);
tree.insert(3);
tree.insert(6);
tree.insert(8);
tree.insert(10);
tree.insert(15);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);

console.log("min", tree.min());
console.log("max", tree.max());
console.log("search", tree.search(20) ? "true" : "false");
console.log("search", tree.search(19) ? "true" : "false");
console.log("search", tree.search(18) ? "true" : "false");
console.log("search", tree.search(17) ? "true" : "false");
tree.remove(10);
console.log(tree.iterativeInOrderTraverse());
