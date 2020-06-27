# frozen_string_literal: true

def binary_tree_height(array_tree)
  count = 0
  queue = [array_tree[0]]
  newqueue = []
  index = 0
  until queue.empty?
    queue.each do |_x|
      next if array_tree[index].nil?

      newqueue.push(array_tree[index * 2 + 1])
      newqueue.push(array_tree[index * 2 + 2])
      index += 1
    end

    queue = []

    queue += newqueue
    count += 1
    break if !newqueue.all? || newqueue.all?(&:zero?)

    newqueue = []

  end
  count
end
puts binary_tree_height([5, 3, 2, 9, 0, 0, 7, 0, 0, 0, 0, 0, 0, 5, 0])
