# frozen_string_literal: true

def transpose(string)
  queue = []
  list = string.split('')
  list.each_with_index do |l, i|
    if l == 'g'
      next if list[i + 1] != 'n' && list[i + 1] != 'g'

      if list[i + 1] == 'g'
        until list[i] != 'g'
          queue << l
          list.delete_at(i)
        end
      else
        queue << l
        list.delete_at(i)
      end
    elsif l != 'n' && list[i - 1] == 'n'
      list.insert(i, queue.shift) until queue.empty?
    elsif i == list.size - 1 && queue.size.positive?
      list << queue.shift until queue.empty?
      break
    end
  end
  list.join('')
end

a = 'word'
b = a.split('')
b.delete_at(2)
p b
b.insert(2, 'r')
p b.shift
p b
puts transpose('he was searchign on Bign for signign kigns')

puts transpose('rignadingdiggn!')
# => ringadingdingg!

puts transpose('gngngnnggnngggnnn')
# => nnnnnnnnngggggggg
