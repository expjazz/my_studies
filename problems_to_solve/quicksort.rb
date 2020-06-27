# frozen_string_literal: true

require 'byebug'
def quick_sort(arr)
  if arr.size == 2
    arr[0], arr[1] = arr[1], arr[0] if arr[0] > arr[1]
    arr
  elsif arr.size.zero?
    []

  elsif arr.size == 1
    arr
  else
    x = arr[arr.size / 2]
    less = arr.select { |y| y < x }
    mid = arr.select { |y| y == x }
    big = arr.select { |y| y > x }
    quick_sort(less) + mid + quick_sort(big)
  end
end

p quick_sort([9, 3, 4, 0, -3, 4, 11, 8, 20, 32, 2, 10, 15, 1])
