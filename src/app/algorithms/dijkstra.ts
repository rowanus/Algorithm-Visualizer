export function dijkstra(grid, startNode, finishNode) {
    const visitedNodes = [];
    startNode.distance = 0;
    const unvisitedNodes = getAllNodes(grid);
    while(!!unvisitedNodes.length) {
        sortNodes(unvisitedNodes);
        const closestNode = unvisitedNodes.shift();
        if (closestNode.isWall) continue;
        if(closestNode.distance == Infinity) return visitedNodes;
        closestNode.isVisited = true;
        console.log(closestNode);
        visitedNodes.push(closestNode);
        if(closestNode == finishNode) return visitedNodes;
        updateUnvisitedNeighbors(closestNode, grid);
    }
}

//Returns distances in DESC order
function sortNodes(nodes) {
    nodes.sort((a, b) => a.distance - b.distance)
}

function updateUnvisitedNeighbors(node, grid) {
    const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
    for (const neighbor of unvisitedNeighbors) {
        neighbor.distance = node.distance += 1;
        neighbor.previousNode = node;
    }
}

function getUnvisitedNeighbors(node, grid) {
    const neighbors = [];
    const row = node.row;
    const col = node.col;
    
    //Check above
    if (row > 0) neighbors.push(grid[row - 1][col]);
    //Check under
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    //Check left
    if (col > 0) neighbors.push(grid[row][col - 1]);
    //Check right
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
    return neighbors.filter(node => !node.isVisited);
}

function getAllNodes(grid) {
    const nodes = [];
    for (const row of grid) {
      for (const node of row) {
        nodes.push(node);
      }
    }
    return nodes;
  }

  export function getNodesInShortestPathOrder(finishNode) {
    const nodesInShortestPathOrder = [];
    let currentNode = finishNode;
    while (currentNode !== null) {
      nodesInShortestPathOrder.unshift(currentNode);      
      currentNode = currentNode.previousNode;
    }
    return nodesInShortestPathOrder;
  }
