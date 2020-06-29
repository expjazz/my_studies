# frozen_string_literal: true

require 'byebug'
class Node
  attr_reader :data
  attr_accessor :left, :right

  def initialize(data)
    @data = data
  end
end

# helper function
def array_to_tree(array, i = 0)
  return nil if i >= array.length || array[i] == 0

  node = Node.new(array[i])
  node.left = array_to_tree(array, 2 * i + 1)
  node.right = array_to_tree(array, 2 * i + 2)

  node
end

# helper function
def height(node)
  return 0 if node.nil?
  return 1 if node.left.nil? && node.right.nil?

  left = height(node.left)
  right = height(node.right)
  [left, right].max + 1
end

def check_balanced(node)
  return true if node.nil?

  left = check_balanced(node.left)
  return false if left == false

  right = check_balanced(node.right)
  return false if right == false

  (height(node.left) - height(node.right)).abs <= 1
end

def balanced_tree?(array)
  node = array_to_tree(array)
  check_balanced(node)
end

puts balanced_tree?([1, 2, 3, 0, 0, 4, 5, 0, 0, 0, 0, 6, 0, 7, 8])

puts balanced_tree?([1, 2, 3])

puts balanced_tree?([1, 2, 3, 4, 0, 0, 5, 6, 0, 0, 0, 0, 0, 0, 7])

# => false

# => false
