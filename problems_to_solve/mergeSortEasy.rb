def merge_sort(array1, array2)
  newArr = []
  x = 0
  while x < array1.size 
    if array1[x] > array2[x]
      newArr.push(array2[x])
      newArr.push(array1[x])
    else 
      newArr.push(array1[x])
      newArr.push(array2[x])      
    x += 1
    end
  end
  newArr
end

p merge_sort([1, 3, 9, 11], [2, 4, 6, 8])