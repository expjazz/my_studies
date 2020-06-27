# frozen_string_literal: true

def flatten(data, arr = [])
  data.each do |x|
    if x.is_a?(Array)
      flatten(x, arr)
    else
      arr << x

    end
  end
  arr
end

p flatten([1, 2, [[3, 4], [5, [6]]], [7, 8]])
