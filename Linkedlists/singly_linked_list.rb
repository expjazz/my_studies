# frozen_string_literal: true

class Node
  attr_accessor :value, :next_node

  def initialize(value, next_node = nil)
    @value = value
    @next_node = next_node
  end
end

class LinkedList
  attr_accessor :head, :tail
  # setup head and tail
  def initialize; end

  def push_front(number)
    new_node = Node.new(number, @head)
    @head = new_node
    @tail = @head if @tail.nil?
  end

  def pop_front
    raise 'empty list' unless @head

    @head = @head.next_node
    @tail = nil unless @head
  end

  def push_back(value)
    node = Node.new(value)
    if @tail.nil?
      @head = node
      @tail = node
    else
      @tail.next_node = node
      @tail = node
    end
  end

  def pop_back
    if @head.nil?
      p 'Empty list'
    elsif @head == @tail
      @head = nil
      @tail = nil
    else
      p = @head
      loop do
        break if p.next_node.next_node.nil?

        p = p.next_node
      end
      p.next_node = nil
      @tail = p
    end
  end

  def index(value)
    temp = @head
    count = 0
    loop do
      break if temp.next_node.nil? || temp.value == value

      temp = temp.next_node
      count += 1
    end
    count
  end

  def get_index(index)
    temp = @head
    index.times do
      break if temp.next_node.nil?

      temp = temp.next_node
    end
    temp.value
  end

  def add_at(index, value)
    if index == 0
      push_front(value)
    else
      index -= 1
      temp = @head
      index.times do
        break if temp.next_node.nil?

        temp = temp.next_node
      end
      node = Node.new(value, temp.next_node)
      temp.next_node = node
    end
  end

  def count
    temp = @head
    count = 1
    until temp.next_node.nil?
      temp = temp.next_node
      count += 1
    end
    count
  end

  def remove_at(index)
    temp = @head
    if index.zero?
      pop_front

    else
      index -= 1
      index.times do
        temp = temp.next_node
      end
      temp.next_node = temp.next_node.next_node
    end
  end
end

list = LinkedList.new

list.push_front('a')
list.push_front(0)
list.push_back('b')
list.push_front('c')

list.add_at(1, 'value')
p 'list'
p list
p 'remove'
list.remove_at(2)
p list
