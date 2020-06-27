# frozen_string_literal: true

def palindromeIndex(s)
  return -1 if s == s.reverse

  stack = s.split('')
  i = 0

  s.chars.each do |x|
    return i if stack.pop != x

    i += 1
  end
end

def is_palindrome?(s)
  return -1 if s == s.reverse
end
palindromeIndex('aaab')
