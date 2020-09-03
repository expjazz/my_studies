def advanced_quicksort(array, start = 0, endInd = array.size - 1)
  if start < endInd
    pivot = helper(array, start, endInd)
    puts "#{array}"
    advanced_quicksort(array, start, pivot - 1)
    advanced_quicksort(array, pivot + 1, endInd)
  end

end

def swap(one, two, array) 
  array[one], array[two] = array[two], array[one]
end

def helper(array, start, endInd)
  pivot = array[endInd] 
  firstPointer = start 
  secondPointer = start
  while secondPointer < endInd 
    if array[secondPointer] < pivot 
      swap(firstPointer, secondPointer, array)
      firstPointer += 1 
    end
    secondPointer += 1
  end
  swap(firstPointer, endInd, array)
  return firstPointer
end
  
p advanced_quicksort([1, 3, 9, 8, 2, 7, 5])
# => 1 3 2 5 9 7 8
#    1 2 3 5 9 7 8
#    1 2 3 5 7 8 9
  # helper(array, start, left - 1 )
 # helper(array, left + 1, endInd)
