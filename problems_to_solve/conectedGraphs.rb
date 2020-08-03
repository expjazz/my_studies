def connected_graph?(graph)
  queue = [0]
  visited = []
  result = false
  while !queue.empty?
    temp = queue.shift
    graph[temp].each do |x|
      queue.push(x) if !visited.include?(x)
    end
    visited.push(temp)
  end
  graph.each do |k, v|
    result = v.all? {|x| visited.include?(x)}
    break if result == false
  end
  return result
end

puts connected_graph?({
  0 => [2], 
  1 => [4], 
  2 => [0, 5, 3], 
  3 => [5, 2], 
  4 => [5, 1], 
  5 => [4, 2, 3]
})

puts connected_graph?({
  0 => [1, 2], 
  1 => [0, 2], 
  2 => [0, 1, 3, 4, 5], 
  3 => [2, 4], 
  4 => [3, 2], 
  5 => [2]
})