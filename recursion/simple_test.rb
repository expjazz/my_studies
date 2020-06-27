require 'byebug'

def factiorial(n)
  if n == 1
    return 1
  else
    n * factiorial(n-1)
  end
end

puts factiorial(4)

def is_palin(word)
  p word
  
  if word.size < 2
    p 'a'
    return true
  elsif word.size > 1
    
    if word[0] != word[-1]
      return false
    elsif
      is_palin(word[1, word.size-2])
    end

  end
  true 
end

def collatz(num, count)
  if num == 1
    count
  elsif num % 2 == 0
    collatz(num / 2, count + 1)
  else
    collatz(3 * num + 1, count + 1)
  end
end

def quicksort(num_list)
  if num_list == []
    return num_list
  else
    pivot = num_list[0]
    lesser = []
    num_list.each { |x| lesser << x if x < pivot }
    pivots = []
    num_list.each { |x| pivots << x if x == pivot }
    greater = []
    num_list.each { |x| greater << x if x > pivot }
    a = quicksort(lesser) + pivots + quicksort(greater)
    return a
  end
end

a = [5, 3, 1, 2, 4, 7, 9, 8,13, 12, 19]
debugger
p quicksort(a)
