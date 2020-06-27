# frozen_string_literal: true

def find_mismatch_bracket(text)
  opening_stack = []
  text.chars.each_with_index do |char, index|
    if ['(', '[', '{'].include?(char)

      opening_stack << char
    elsif [')', ']', '}'].include?(char)
      return index + 1 if opening_stack.empty?

      b = opening_stack.pop
      if char == ')' && b != '('
        return index + 1
      elsif char == ']' && b != '['
        return index + 1
      elsif char == '}' && b != '{'
        return index + 1
      end
    end
  end
  'success'
end

def balanced_brackets?(string)
  stack = []
  a = string.split('')
  a.each do |x|
    if x == '(' || x == '{' || x == '['
      stack.unshift(x)
    elsif x == ')'
      return false if stack.pop != '('
    elsif x == ']'
      return false if stack.pop != '['
    elsif x == '}'
      return false if stack.pop != '{'
    end
  end
  if stack.empty?
    true
  else
    false
  end
end

p balanced_brackets?('[({}{}{})([])]')
