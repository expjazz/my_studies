# frozen_string_literal: true

def solution(input, markers)
  mark1 = input.index(markers[0])
  mark2 = input.index(markers[1])
  a = ''
  count = 0
  input.chars.each_with_index do |char, index|
    if char == "\n"

      count = 0
    elsif input[index + 1] == markers[0] || input[index + 1] == markers[1]
      count = 1
    end
    a += char if count.zero?
  end
  puts a
  a
end

p solution("apples, plums % and bananas\npears\noranges !applesauce", ['%', '!'])
