# frozen_string_literal: true

def sliding_maximum(k, array)
  a = []
  b = 0
  until k == array.size
    a << array[b, k].max
    k -= 1 if b.zero?
    b += 1
    k += 1
  end
  a
end

p sliding_maximum(3, [1, 3, 5, 7, 9, 2])
a = [1, 3, 5, 7, 9, 2]
p a[0, 3]
