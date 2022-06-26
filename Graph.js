const Dictionary = require("./Dictionary");

class Graph {
  vertices = [];
  adjList = new Dictionary();

  addVertex(v) {
    this.vertices.push(v);
    this.adjList.set(v, []);
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }

  breadthFirstTraverse(callback) {
    let queue = [];
    let colors = [];
    queue.push(this.vertices[0]);
    colors[this.vertices[0]] = "gray";

    while (queue.length) {
      let current = queue.shift();

      let neighbors = this.adjList.get(current);
      for (let i = 0; i < neighbors.length; i++) {
        if (colors[neighbors[i]] === undefined) {
          queue.push(neighbors[i]);
          colors[neighbors[i]] = "gray";
        }
      }

      colors[current] = "black";
      callback(current);
    }
  }

  toString() {
    let s = "";

    for (let i = 0; i < this.vertices.length; i++) {
      s += this.vertices[i] + "=>";
      let neighbors = this.adjList.get(this.vertices[i]);
      for (let j = 0; j < neighbors.length; j++) {
        s += neighbors[j] + " ";
      }
      s += "\n";
    }

    return s;
  }
}
module.exports = Graph;
