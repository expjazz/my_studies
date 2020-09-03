def dfs(graph, current, visited, parent)
  visited[current] = true 
  graph[current]&.each do |x|
    if visited[x]
      return true if x != parent
    else 
      return true if dfs(graph, x, visited, current)
    end 
  end
  return false
end

def graph_cycle?(graph)
  visited = {}
  graph.keys.each do |x|
    if !visited[x]
      return true if dfs(graph, x, visited, nil)
    end
  end
  return false
end


puts graph_cycle?({
                    0 => [2],
                    1 => [4],
                    2 => [0, 5, 3],
                    3 => [5, 2],
                    4 => [5, 1],
                    5 => [4, 2, 3]
                  })
# debugger
puts graph_cycle?({
                    0 => [2],
                    1 => [2],
                    2 => [0, 1, 3, 4, 5],
                    3 => [2],
                    4 => [2]
                  })
# => false
