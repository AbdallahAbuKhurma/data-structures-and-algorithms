
'use strict';

const Vertex = require('../graphs').Vertex;
// const Edge = require('../graphs').Edge;
const Graph = require('../graphs').Graph;

describe('Testing graph methods', () => {
  it('Vertex can be successfully added to the graph', () => {
    let graph = new Graph();
    const first = new Vertex('first');
    graph.addVertex(first);
    expect(graph._adjacencyList).toBeTruthy();
    expect(graph._adjacencyList.get(first)).toEqual([]);
  });

  it('An edge can be successfully added to the graph', () => {
    let graph = new Graph();
    const first = new Vertex('first');
    const second = new Vertex('second');
    graph.addVertex(first);
    graph.addVertex(second);
    graph.addEdge(first, second);
    expect(graph._adjacencyList.get(first)).toEqual([{ 'vertex': { 'value': 'second' }, 'weight': 0 }]);
  });

  it('A collection of all vertices can be properly retrieved from the graph', () => {
    let graph = new Graph();
    const first = new Vertex('first');
    const second = new Vertex('second');
    graph.addVertex(first);
    graph.addVertex(second);
    graph.addEdge(first, second);
    graph.addEdge(second, first);
    expect(graph._adjacencyList.get(first)).toEqual([{ 'vertex': { 'value': 'second' }, 'weight': 0 }]);
    expect(graph._adjacencyList.get(second)).toEqual([{ 'vertex': { 'value': 'first' }, 'weight': 0 }]);
  });

  it('All appropriate neighbors can be retrieved from the graph', () => {
    let graph = new Graph();
    const first = new Vertex('first');
    const second = new Vertex('second');
    const three = new Vertex('three');
    graph.addVertex(first);
    graph.addVertex(second);
    graph.addVertex(three);
    graph.addEdge(first, second);
    graph.addEdge(first, three);
    expect(graph.getNeighbors(first)).toEqual(
      [{ 'vertex': { 'value': 'second' }, 'weight': 0 }, { 'vertex': { 'value': 'three' }, 'weight': 0 }]
    );
  });

  it('Neighbors are returned with the weight between nodes included', () => {
    let graph = new Graph();
    const first = new Vertex('first');
    const second = new Vertex('second');
    const three = new Vertex('three');
    graph.addVertex(first);
    graph.addVertex(second);
    graph.addVertex(three);
    graph.addEdge(first, second);
    graph.addEdge(first, three);
    const testValue = graph.getNeighbors(first);
    expect(testValue[0]['weight']).toEqual(0);
    expect(testValue[1]['weight']).toEqual(0);
  });

  it('The proper size is returned, representing the number of nodes in the graph', () => {
    let graph = new Graph();
    const first = new Vertex('first');
    const second = new Vertex('second');
    graph.addVertex(first);
    graph.addVertex(second);
    graph.addEdge(first, second);
    expect(graph.size(first)).toEqual(2);
  });

  it('A graph with only first node and edge can be properly returned', () => {
    let graph = new Graph();
    const first = new Vertex('first');
    graph.addVertex(first);
    graph.addEdge(first);
    expect(graph._adjacencyList.get(first)).toEqual([{ 'vertex': undefined, 'weight': 0 }]);
  });

  it('An empty graph properly returns null', () => {
    let graph = new Graph();
    expect(graph._adjacencyList.values()).not.toBe(null);
  });
});
