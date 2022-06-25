class Node {
  left = null;
  right = null;
  constructor(key) {
    this.key = key;
  }
}

class BinarySearchTree {
  root = null;

  insert(key) {
    if (this.root === null) {
      this.root = new Node(key);
      return true;
    }
    this.insertNode(this.root, key);
  }

  insertNode(node, key) {
    if (key < node.key) {
      if (node.left === null) {
        node.left = new Node(key);
        return true;
      }
      this.insertNode(node.left, key);
    } else {
      if (node.right === null) {
        node.right = new Node(key);
        return true;
      }
      this.insertNode(node.right, key);
    }
  }

  min() {
    let current = this.root;
    while (current?.left) {
      current = current.left;
    }
    return current?.key;
  }

  findMinNode(node) {
    while (node?.left) {
      node = node.left;
    }
    return node;
  }

  max() {
    let current = this.root;
    while (current?.right) {
      current = current.right;
    }
    return current?.key;
  }

  search(key) {
    return this.searchNode(this.root, key);
  }

  searchNode(node, key) {
    if (node === null) return false;

    if (key < node.key) {
      return this.searchNode(node.left, key);
    }
    if (key > node.key) {
      return this.searchNode(node.right, key);
    }

    return true;
  }

  remove(key) {
    this.root = this.removeNode(this.root, key);
  }

  removeNode(node, key) {
    if (node === null) return node;

    if (key < node.key) {
      node.left = this.removeNode(node.left, key);
      return node;
    }
    if (key > node.key) {
      node.right = this.removeNode(node.right, key);
      return node;
    }

    // if the removed node is a leaf, we return null.
    if (node.left === null && node.right === null) {
      node = null;
      return node;
    }

    // if removed node has only one node to the right
    // we return that node
    if (node.left === null) {
      node = node.right;
      return node;
    }

    // if removed node has only one node to the left
    // we return that node
    if (node.right === null) {
      node = node.left;
      return node;
    }

    // since all nodes to the right of a (sub)tree root will be bigger
    // than the nodes to the left, the "heir" of the root is the min from the right subtree
    let auxNode = this.findMinNode(node.right);
    node.key = auxNode.key;
    // we replace the removed node key by the "heir" key and remove the heir;
    node.right = this.removeNode(node.right, auxNode.key);
    return node;
  }

  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
  }

  inOrderTraverseNode(node, callback) {
    if (node === null) return;
    // first we go to the deep of left edge until we find null, then execute callback.
    // this way we always have the callback executed in asc order
    this.inOrderTraverseNode(node.left, callback);
    callback(node.key);
    this.inOrderTraverseNode(node.right, callback);
  }

  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback);
  }

  preOrderTraverseNode(node, callback) {
    if (node === null) return;
    callback(node.key);
    this.preOrderTraverseNode(node.left, callback);
    this.preOrderTraverseNode(node.right, callback);
  }

  postOrderTraverse(callback) {
    return this.postOrderTraverseNode(this.root, callback);
  }

  postOrderTraverseNode(node, callback) {
    if (node === null) return;
    this.postOrderTraverseNode(node.left, callback);
    this.postOrderTraverseNode(node.right, callback);
    callback(node.key);
  }

  iterativeInOrderTraverse() {
    let current = this.root;
    let stack = [];
    let result = [];

    while (current || stack.length) {
      // first we go deep to the left
      while (current) {
        stack.push(current);
        current = current.left;
      }
      // we can pop right here because if there is no right
      // we finished this stack, and we already visited the node (down)
      current = stack.pop();
      result.push(current.key); // visit node
      current = current.right;
    }

    return result;
  }

  iterativePreOrderTraverse() {
    let current = this.root;
    let stack = [];
    let result = [];

    while (current || stack.length) {
      // we go deep to the left while visiting each node
      while (current) {
        stack.push(current);
        result.push(current.key);
        current = current.left;
      }
      // we can pop right here because if there is no right
      // we finished the stack, and we already visited the target node.
      current = stack.pop();
      current = current.right;
    }

    return result;
  }

  iterativePostOrderTraverse() {
    let current = this.root;
    let stack = [];
    let result = [];

    while (current || stack.length) {
      // second condition checks if we already visited left
      while (current && current !== stack[stack.length - 1]) {
        stack.push(current);
        current = current.left;
      }

      current = stack[stack.length - 1];

      // if there is no right, it means we reached a leaf
      // and we must visit the target node and pop the stack
      if (!current.right) {
        result.push(stack.pop().key);
        current = stack[stack.length - 1];
        continue;
      }

      // second condition checks if we already visited right
      if (current.right.key !== result[result.length - 1]) {
        current = current.right;
        continue;
      }

      result.push(stack.pop().key);
      current = stack[stack.length - 1];
    }

    return result;
  }
}
module.exports = BinarySearchTree;
