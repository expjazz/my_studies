# frozen_string_literal: true

require 'byebug'
def hanoi_steps(number_of_discs)
  towers(number_of_discs, 1, 2, 3)
end

def towers(discs, start, middle, goal)
  if discs == 1
    puts "#{start}->#{goal}"
    return
  end
  towers(discs - 1, start, goal, middle)
  puts "#{start}->#{goal}"
  towers(discs - 1, middle, start, goal)
end

p hanoi_steps(4)
