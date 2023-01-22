/* Problem 8.4: Find if Path Exists in Graph

There is a bi-directional graph with n vertices,
where each vertex is labeled from 0 to n -1 (inclusive).
The edges in the graph are represented as a 2D integer array edges,
where each edges[i] = [ui, vi] denotes a bi-directional edge between 
vertex ui and vertex vi.
Every vertex pair is connected by at most one edge,
and no vertex has an edge to itself.
You want to determine if there is
a valid path that exists from vertex source to vertex destination.
Given edges and the integers n, source, and destination, 
return true if there is a valid path from source to destination, 
or false otherwise
*/

class Graph {
    constructor() {
        this.adjacencyList = {};
        this.numberOfNodes = 0;
    }

    addVertex(node) {
        this.adjacencyList[node] = [];
        this.numberOfNodes++;
    }

    addEdge(node1, node2) {
        this.adjacencyList[node1].push(node2);
        this.adjacencyList[node2].push(node1);
    }

    showConnections() {
        console.log(this.adjacencyList);
    }

    findPath(source, destination) {
        for(let i = 0;i<this.adjacencyList[source].length;i++) {
            if(this.adjacencyList[source][i] == destination) {
                return true;
            }
        }
        return false;
    }
}

let myGraph = new Graph();
myGraph.addVertex(0);
myGraph.addVertex(1);
myGraph.addVertex(2);
myGraph.addVertex(3);
myGraph.addVertex(4);
myGraph.addVertex(5);
myGraph.addEdge(0, 1);
myGraph.addEdge(0, 2);
myGraph.addEdge(0, 2);
myGraph.addEdge(3, 5);
myGraph.addEdge(5, 4);
myGraph.addEdge(4, 3);
myGraph.showConnections();
console.log(myGraph.findPath(0, 1));