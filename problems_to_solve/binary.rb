# frozen_string_literal: true

def binary(array, number)
  if array.size == 1 && array != number
    false
  elsif array[array.size / 2] == number
    true
  elsif number > array[array.size / 2]
    binary(array[(array.size / 2), array.size - 1], number)
  elsif number < array[array.size / 2]
    binary(array[0, (array.size / 2)], number)
  end
end

x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14]

p binary(x, 14)
