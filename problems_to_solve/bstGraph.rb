# frozen_string_literal: true

require 'byebug'
def bfs(graph)
  queue = []
  result = []
  queue.push(0)
  until queue.empty?
    temp = queue.shift
    graph[temp].each { |x| queue.push(x) unless result.include?(x) }
    result.push(temp) unless result.include?(temp)
  end
  result
end

p bfs({
        0 => [2],
        1 => [4],
        2 => [5, 0, 3],
        3 => [2],
        4 => [1, 5],
        5 => [4, 2]
      })
