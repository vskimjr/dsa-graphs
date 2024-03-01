import { GNodeStr } from "../graph/graph";

/** Return array of nodes, in DFS order (recursive version)  */

function rDfs(
    start: GNodeStr,
    result: string[] = [],
    visited = new Set([start])): string[] {

  result.push(start.value);

  for (const adj of start.adjacent){
    if (!visited.has(adj)){
      visited.add(adj);
      rDfs(adj, result, visited)
    }
  }

  return result;
}

/** Return array of nodes, in DFS order (iterative version)  */

function iDfs(start: GNodeStr): string[] {
  return ["todo"];
}

/** Return array of nodes, in BFS order (recursive version)  */

function bfs(start: GNodeStr): string[] {
  return ["todo"];
}


export { iDfs, rDfs, bfs };