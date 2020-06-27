# frozen_string_literal: true

require 'byebug'
def recursion(a, b)
  a, b = b, a if a < b

  if b == 0
    a
  else
    recursion(b, a % b)
  end
end

def solution(numbers)
  a = 0
  a = numbers[0] if numbers.size == 1
  numbers.each_with_index do |x, y|
    a = if a

          recursion(a, x)
        else
          recursion(x, numbers[y - 1])
        end
  end
  a * numbers.size
end
p solution([4, 16, 24])
p '-------------------------------------------------------------------------------'
def solution2(numbers)
  until numbers.all? { |x| x == numbers.min }
    max = numbers.max
    index = numbers.index(max)
    numbers[index] = max - numbers[index - 1]

  end
  numbers.sum
end

p solution2([4, 16, 24])
