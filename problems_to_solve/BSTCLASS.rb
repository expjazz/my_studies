# frozen_string_literal: true

class Node
  attr_reader :data
  attr_accessor :left, :right

  def initialize(data)
    @data = data
  end
end

class BST
  attr_accessor :root
  #  def initialize(data)
  #   @root.data = data
  # end
  def insert(node)
    if @root.nil?
      @root = node
    elsif node.data > @root.data
      if @root.right.nil?
        @root.right = node
      else
        insert_helper(node, @root.right)
      end
    elsif node.data < @root.data
      if @root.left.nil?
        @root.left = node
      else
        insert_helper(node, @root.right)
      end
    end
  end

  def insert_helper(node, root)
    if node.data > root.data
      if root.right.nil?
        root.right = node
      else
        insert_helper(node, root.right)
      end
    elsif node.data < root.data
      if root.left.nil?
        root.left = node
      else
        insert_helper(node, root.left)
      end
    end
  end

  def pre_order(node = @root)
    return '' if node.nil?

    result = "#{node.data} "
    result += pre_order(node.left)
    result += pre_order(node.right)
  end
end

def binary_search_tree(array)
  tree = BST.new
  array.each do |e|
    a = Node.new(e)
    tree.insert(a)
    p tree
    p '-----'
    p a
    p 'xxxxx'
  end
  tree.pre_order
end

puts binary_search_tree([8, 3, 10, 1, 6, 14, 4, 7, 13])
# => "8 3 1 6 4 7 10 14 13"
