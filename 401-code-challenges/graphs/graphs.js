'use strict';

class Vertex {
  constructor(value){
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0){
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor(){
    this._adjacencyList = new Map();
  }

  addVertex(vertex){
    this._adjacencyList.set(vertex, []);
  }

  addEdge(startVertex, endVertex){
    if(!this._adjacencyList.has(startVertex)){
      throw new Error('invalid vertex');
    }
    const adjacencies = this._adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex));
  }

  getNodes(){
    const nodes = [];
    for(const [vertex] of this._adjacencyList.entries()){
      nodes.push(vertex);
    }
    return nodes;
  }

  getNeighbors(vertex){
    if(!this._adjacencyList.has(vertex)){
      throw new Error('there is no neighbors');
    }
    return [...this._adjacencyList.get(vertex)];
  }

  size(vertex){
    const queue = [];
    const visited = new Set();
    queue.unshift(vertex);
    visited.add(vertex);

    while(queue.length){
      const current = queue.pop();
      const neighbors = this.getNeighbors(current);
      for(let neighbor of neighbors){
        const neighborVertex = neighbor.vertex;
        if(visited.has(neighborVertex)){
          continue;
        } else {
          visited.add(neighborVertex);
          queue.unshift(neighborVertex);
        }
      }
    }
    return visited.size;
  }
}

module.exports = {
  Vertex,
  Edge,
  Graph,
};
