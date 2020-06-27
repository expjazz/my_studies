# frozen_string_literal: true

require 'byebug'
def recover_secret(triplets)
  arr = []
  triplets.each do |triplet|
    triplet.each_with_index do |num, i|
      if arr.include?(triplet[i + 1]) && i < 2 && arr.include?(num) == false
        ind = arr.index(triplet[i + 1])
        arr.insert(ind, num)
      elsif arr.include?(num) && arr.include?(triplet[i + 1]) && i < 2
        ind = arr.index(triplet[i + 1])
        ind_self = arr.index(num)
        if ind_self < ind
          p 'nothing'
        else
          arr.insert(ind, num) if ind != 0
          arr.insert(ind, num) if ind.zero?
          arr.delete_at(ind_self + 1)
        end
      elsif arr.include?(num) == false
        arr << num
      end
    end
  end
  arr
end

triplets = [
  %w[t u p],
  %w[w h i],
  %w[t s u],
  %w[a t s],
  %w[h a p],
  %w[t i s],
  %w[w h s]
]

p recover_secret(triplets)
