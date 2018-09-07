// Graph 에선 node 대신 vertex, arc 대신 edge라 부른다.
var Graph = function(value){
  this.nodeList = {};
};

Graph.prototype.addNode = function(node){
  if(!this.nodeList[node]) this.nodeList[node] = { edges: {} }
};

Graph.prototype.contains = function(node){
  if(this.nodeList[node]) return true;
  return false;
};

Graph.prototype.removeNode = function(node){
  let { edges } = this.nodeList[node];
  for(let key in edges) {
    delete this.nodeList[key].edges[node];
  }
  delete this.nodeList[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  if(this.nodeList[fromNode] && this.nodeList[toNode]) {
    if(this.nodeList[fromNode].edges[toNode]) return true;
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  if(fromNode !== toNode) {
    this.nodeList[fromNode].edges[toNode] = 1;
    this.nodeList[toNode].edges[fromNode] = 1;
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.nodeList[fromNode].edges[toNode];
  delete this.nodeList[toNode].edges[fromNode];
};

Graph.prototype.forEachNode = function(cb){
  for(let key in this.nodeList) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

let graph = new Graph();
graph.addNode('a');
graph.addNode('b');
graph.addNode('c');
graph.addNode('d');
graph.addNode('e');
graph.addEdge('c', 'd');
graph.addEdge('a', 'b');
graph.addEdge('a', 'c');
graph.addEdge('a', 'd');
graph.addEdge('a', 'e');
graph.contains('a');
graph.hasEdge('a', 'd')
graph.removeNode('a');
