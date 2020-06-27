# frozen_string_literal: true

require 'byebug'
def snail(array)
  a = 0
  b = array.size - 1
  s = array.size - 1
  arr = []
  turn = 0
  count = 0
  duration = array.size * array.size
  while duration.positive?
    return arr if a == b

    (a..b).each do |_y|
      (a..b).each do |x|
        arr << array[a][x]
        break if count == b - 1

        count += 1
        duration -= 1
      end
      break if count == b - 1
    end
    turn += 1
    count = 0
    break if duration.zero?

    b -= 1 if turn > 1 && turn % 4 == 0
    return arr if a == b

    (a..b).each do |_y|
      (a..b).each do |x|
        arr << array[x][s]
        break if count == b - 1

        count += 1
        duration -= 1
      end
      break if count == b - 1
    end
    turn += 1
    count = 0
    return arr if a == b
    break if duration.zero?

    b -= 1 if turn > 1 && turn % 4 == 0

    (a..b).each do |_y|
      (a..b).each do |x|
        arr << array[s][s - x]
        break if count == b - 1

        count += 1
        duration -= 1
      end
      break if count == b - 1
    end
    turn += 1
    count = 0
    return arr if a == b

    b -= 1 if turn > 1 && turn % 4 == 0
    break if duration.zero?

    p 'a'
    p arr
    duration -= 1
    (a..b).each do |_y|
      (a..b).each do |x|
        arr << array[s - x][a]
        break if count == b - 1

        count += 1
        duration -= 1
      end
      break if count == b - 1
    end
    b -= 1 if turn > 1 && turn % 4 == 0
    break if duration.zero?

    a += 1
    s -= 1
    count = 0
    p 'v'
    p arr
  end
  p b
  p a
  p duration
  arr
end
p snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]])
