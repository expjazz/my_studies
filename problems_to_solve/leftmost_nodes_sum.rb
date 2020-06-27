# frozen_string_literal: true

def leftmost_nodes_sum(array)
  ind = 0
  temp = []
  until array[ind].nil?
    temp << array[ind]
    ind = 2 * ind + 1
  end
  temp.sum
end
