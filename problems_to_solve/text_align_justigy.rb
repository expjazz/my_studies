# frozen_string_literal: true

require 'byebug'
def justify(text, width)
  draft = text.split
  count = 0
  a = []
  c = ''
  arr = []
  draft.each do |word|
    count += word.size + 1
    if count < width
      a << word
    elsif count > width
      b = 0
      a.each { |x| b += x.size }
      spaces_fill = width - b

      place_to_space = a.size - 1 if a.size > 1
      place_to_space = 1 if a.size == 1
      spaces = spaces_fill / place_to_space
      last_space = spaces_fill % place_to_space
      c = ''
      a.each_with_index do |word2, index|
        c += word2 + ' ' * spaces if index != a.size - 1
        c += word2 + ' ' * last_space if index == a.size - 1
      end
      arr << c
      count = word.size
      a = []
      a << word + ' '

    end
  end
  arr.join("\n")
end

a = 'Lorem  ipsum  dolor  sit amet,
consectetur  adipiscing  elit.
Vestibulum    sagittis   dolor
mauris,  at  elementum  ligula
tempor  eget.  In quis rhoncus
nunc,  at  aliquet orci. Fusce
at   dolor   sit   amet  felis
suscipit   tristique.   Nam  a
imperdiet   tellus.  Nulla  eu
vestibulum    urna.    Vivamus
tincidunt  suscipit  enim, nec
ultrices   nisi  volutpat  ac.'

print justify(a, 50)
