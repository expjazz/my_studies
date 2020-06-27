# frozen_string_literal: true

require 'byebug'
def dbl_linear(n)
  arr = Array.new(n, 1)
  count = 0
  arr.each_with_index do |x, ind|
    break if count > n

    arr[(2 * ind) + 1] = 2 * x + 1
    arr[(2 * ind) + 2] = 3 * x + 1
    count += 1
  end
  arr.uniq.sort[n]
end

p dbl_linear(60_000)
