# frozen_string_literal: true

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

def whatever(node)
  return true if node.nil?
end

def balanced_tree?(array, root = nil)
  root = array_to_tree(array) if array.size.positive?
  left = height(root.left)
  right = height(root.right)
  left - right <= 1
end

puts balanced_tree?([1, 2, 0, 3, 4, 0, 0])
# => false

puts balanced_tree?([1, 2, 3, 4, 5, 6, 7])
# => true
