# frozen_string_literal: true

require 'byebug'
def anagram(s)
  return -1 if s.size.odd?

  str_arr = s.split('')
  s1 = str_arr[0, (str_arr.size / 2)]
  s2 = str_arr[str_arr.size / 2, str_arr.size]
  count = 0
  s1.each_with_index do |x, i|
    if s2.count(x) != 0
      s2.delete(s1[i])
    else
      count += 1
    end
  end
  count
end
p anagram('xaxbbbxx')
