# frozen_string_literal: true

require 'byebug'
def graph(hash_graph, starting = nil, _node = nil, array = [], _stop = false)
  return '' if array.include?(starting)

  array.push(starting) if starting
  return true if starting == 4

  array.push(0) unless starting

  starting = 0 if starting.nil?
  hash_graph[starting].each do |val|
    temp = graph(hash_graph, val, nil, array)
    break if temp == true || array[-1] == 4
  end
  array
end

hash = {
  0 => [2],
  1 => [4],
  2 => [5, 0, 3],
  3 => [2],
  4 => [1, 5],
  5 => [4, 2]
}

p graph(hash)
# => [0, 2, 5, 4]
