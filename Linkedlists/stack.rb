# frozen_string_literal: true

require_relative 'singly_linked_list'

class Stack
  attr_accessor :list
  def initialize
    @list = LinkedList.new
  end

  def push(value)
    @list.push_front(value)
  end

  def pop
    a = @list.head.value
    @list.pop_front
    a
  end
end
