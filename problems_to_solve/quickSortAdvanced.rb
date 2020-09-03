def advanced_quicksort(array)
  helper(array, 0, array.size - 1)
  array
  
end

def swap(one, two, array) 
  array[one], array[two] = array[two], array[one]
end

def helper(array, start, endInd)
  if start >= endInd
    return '' 
  end 
  pivot = start
  left = start + 1 
  right = endInd
  while right >= left 
    if array[left] > array[pivot] && array[right] < array[pivot]
      swap(left, right, array)
    end
    if array[left] <= array[pivot]
      left += 1 
    end 
    if array[right] >= array[pivot]
      right -= 1 
    end
  end
  swap(pivot, right, array)
  leftIsSmaller = right - 1 - start < endInd - (right + 1)
  if leftIsSmaller
    helper(array, start, right - 1 )
    helper(array, right + 1, endInd)
  else 
    helper(array, right + 1, endInd) 
    helper(array, start, right - 1 )

  end
  
end
p advanced_quicksort([1, 3, 9, 8, 2, 7, 5])