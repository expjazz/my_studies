# frozen_string_literal: true

require 'byebug'
class Node
  attr_reader :data
  attr_accessor :left, :right

  def initialize(data)
    @data = data
  end
end

def array_to_tree(array, i)
  return nil if i >= array.length || array[i] == 0

  node = Node.new(array[i])
  node.left = array_to_tree(array, 2 * i + 1)
  node.right = array_to_tree(array, 2 * i + 2)

  node
end

def search_tree?(array = [], root = nil, min = nil, max = nil)
  root = array_to_tree(array, 0) if array != []

  return false if max && root.data > max

  return false if min && root.data < min

  left = search_tree?([], root.left, min, root.data) if root.left
  right = search_tree?([], root.right, root.data, max) if root.right

  return false if left == false || right == false

  true
end

puts search_tree?([19, 9, 26, 4, 13, 17, 29]) == false
# false

puts search_tree?([20, 10, 27, 5, 14, 23, 30, 0, 12, 0, 0, 0, 0, 0, 0]) == false
# false

puts search_tree?([10, 4, 12]) == true
# # => true

puts search_tree?([20, 10, 27, 12, 14, 23, 30]) == false
# false

puts search_tree?([10, 5, 7]) == false
# => false
