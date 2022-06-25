const Queue = require("./Queue");

class QueueElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue extends Queue {
  enqueue(element, priority) {
    const el = new QueueElement(element, priority);

    if (this.isEmpty()) return this.items.push(el);

    for (let i = 0; i < this.items.length; i++) {
      if (priority < this.items[i].priority) 
        return this.items.splice(i, 0, el);
    }
    
    return this.items.push(el);
  }
}
module.exports = PriorityQueue;