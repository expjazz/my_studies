# frozen_string_literal: true

# # frozen_string_literal: true
# def exact_sum?(k, coins)
#   # check the sum
#   # if bigger,
#   # remove the first
#   # check if the sum is bigger
#   # if is bigger, remove the next one
#   # check if is bigger
#   # if is bigger, remove until is smaller
#   # if smaller, return the removed and remove the next

#   # if none work, keep the first and try removing the second
# end

def exact_sum?(k, coins)
  if coins.sum == k
    return true
  elsif coins.sum < k
    return false
  else
    coins.each_with_index do |_n, i|
      temp2 = coins.delete_at(i)
      temp = exact_sum?(k, coins)
      if temp == true
        return true
      elsif temp == false
        coins.insert(i, temp2)
        next
      end
    end
  end

  false
end

puts exact_sum?(50, [1, 3, 5, 37, 18, 5])
# # => true

puts exact_sum?(11, [1, 5, 9, 13])

# frozen_string_literal: true

# def exact_sum?(k, coins)
#   if k == coins.sum
#     true
#   else
#     (0...coins.size).to_a.each do |i|
#       exact_sum?(k, coins[i, i + 1])
#       (0...coins.size).to_a.each do |y|
#         next if y == i

#         a = exact_sum?(k, coins[i, y])
#         p coins[i, y]
#         if a == true
#           return true
#         elsif check_sum(k, coins[i, y].sum) == false
#           break
#         end
#       end
#     end
#   end
#   false
# end
