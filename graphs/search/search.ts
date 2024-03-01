import { GNodeStr } from "../graph/graph";
import { Stack } from "../common/stack";

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

  const stack = new Stack<GNodeStr>([start]);
  const result : string[] = [];
  const visited = new Set<GNodeStr>();

  visited.add(start);

  while(!stack.isEmpty()){
    let currNode = stack.pop();
    result.push(currNode.value);

    for(const adj of currNode.adjacent){
      if(!visited.has(adj)){
        visited.add(adj);
        stack.push(adj);
      }

    }

  }

  return result;
}

/** Return array of nodes, in BFS order (recursive version)  */

function bfs(start: GNodeStr): string[] {
  return ["todo"];
}


export { iDfs, rDfs, bfs };