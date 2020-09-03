require 'byebug'



def simple_quicksort(arr)
  byebug
  if arr.size.zero? || arr.nil?
    []

  elsif arr.size == 1
    arr
  else 
    x = arr[0]
    less = arr.select { |y| y < x } || []
    mid = arr.select { |y| y == x } || []
    big = arr.select { |y| y > x } || []
    min = simple_quicksort(less)
    piv = mid
    max = simple_quicksort(big)
    arr = min + piv + max
    puts arr 
  end
end

simple_quicksort([9, 8, 6, 7, 3, 5, 4, 1, 2])