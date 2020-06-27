# frozen_string_literal: true

def sqrt(number)
  sqrt_recursive(number, 0, number / 2)
end

def sqrt_recursive(number, min_interval, max_interval)
  x = (min_interval..max_interval).to_a.sample
  if x * x == number
    x
  elsif x * x > number
    sqrt_recursive(number, min_interval, x)
  elsif x * x < number
    sqrt_recursive(number, x, max_interval)
  end
end

puts sqrt(25)
puts sqrt(7056)
