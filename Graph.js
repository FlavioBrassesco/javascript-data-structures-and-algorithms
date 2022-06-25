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
