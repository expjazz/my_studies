# frozen_string_literal: true

require 'byebug'
def snail(array)
  # to end - arr.size
  # to down - arr.size
  # to start - arr.size
  # to up - arr.size - 1
  arr = []
  return arr if array[0].empty?
  return array[0] if array[0].size == 1

  f = array.size * array.size
  p array
  l = array.size
  count = array.size
  arr = []
  count = 0
  (0...array.size).each do |_i|
    (0...array.size).each do |i|
      f -= 1
      arr << array[0][i]
      count += 1
      break if count == array.size - 1
    end
    break if count == array.size - 1
  end

  count = 0
  (0...array.size).each do |_i|
    (0...array.size).each do |i|
      f -= 1
      arr << array[i][array.size - 1]
      count += 1
      break if count == array.size - 1
    end
    break if count == array.size - 1
  end
  count = 0
  (0...array.size).each do |_i|
    (0...array.size).each do |i|
      f -= 1
      arr << array[array.size - 1][(array.size - 1) - i]
      count += 1
      break if count == array.size - 1
    end
    break if count == array.size - 1
  end
  count = 0

  (0...array.size).each do |_i|
    (0...array.size).each do |i|
      f -= 1
      arr << array[(array.size - 1) - i][0]
      count += 1
      break if count == (array.size - 1)
    end
    break if count == (array.size - 1)
  end
  a = 1
  b = 2
  (l * l).times do
    count = 0

    (a...array.size - a).each do |_i|
      (a...array.size - a).each do |i|
        return arr if f == 0

        p 'd'
        p arr

        f -= 1
        arr << array[a][i]
        count += 1
        break if count == array.size - b
      end
      break if count == array.size - b
    end

    count = 0
    (a...array.size - a).each do |_z|
      (a...array.size - a).each do |i|
        return arr if f == 0

        f -= 1
        arr << array[i + a][array.size - b]
        count += 1
        break if count == array.size - (b + a)
      end
      break if count == array.size - (b + a)
    end
    count = 0
    a += 1
    b += 1

    i = a

    (a...array.size - a).each do |_z|
      while i < array.size - a

        return arr if f == 0

        f -= 1

        arr << array[array.size - a][(array.size - 1) - i]
        i += 1
        count += 1
        break if count == array.size - b
    end
      break if count == array.size - b
    end

    i = a - 1
    (a...array.size - a).each do |_i|
      while i < array.size - a
        return arr if f == 0

        f -= 1
        arr << array[(array.size - 1) - i][1]
        count += 1
        i += 1
        break if count == (array.size - b)
      end
      break if count == (array.size - b)
    end
    i = a
    (a...array.size - a).each do |_i|
      while i < array.size - a
        return arr if f == 0

        f -= 1
        arr << array[(array.size - 1) - i][1]
        count += 1
        i += 1
        break if count == (array.size - b)
      end
      break if count == (array.size - b)
    end
    i = a
    (a...array.size - a).each do |_i|
      while i < array.size - a
        return arr if f == 0

        f -= 1
        arr << array[a][i]
        count += 1
        i += 1
        break if count == (array.size - b)
      end
      break if count == (array.size - b)
    end
    p 'z'
    p arr
    i = a
    (a...array.size - a).each do |_i|
      while i < array.size - a
        return arr if f == 0

        f -= 1
        arr << array[b][(array.size - 1) - i]
        count += 1
        i += 1
        break if count == (array.size - b)
      end
      break if count == (array.size - b)
    end
    p 'oo'
    p arr
  end

  arr
end
p snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]])
