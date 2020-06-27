# frozen_string_literal: true

class PolyTreeNode
  attr_reader :parent
  attr_accessor :children, :value

  def initialize(value)
    @parent = nil
    @children = []
    @value = value
  end

  def parent=(node = nil)
    @parent.children.delete(self) if @parent.nil? == false
    @parent = node
    unless node.nil?
      node.children << self if node.children.include?(self) == false
    end
  end

  def add_child(child_node)
    child_node.parent = self unless @children.include?(child_node)
  end

  def remove_child(child_node)
    raise 'error' unless @children.include?(child_node)

    child_node.parent = nil
    @children.delete(child_node)
  end

  def dfs(target)
    return self if value == target

    @children.each do |child|
      search = child.dfs(target)
      return search if search.nil? == false
    end
    nil
  end
end
