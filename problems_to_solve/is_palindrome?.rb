# frozen_string_literal: true

def is_palindrome?(s)
  p s
  if s.size < 2
    true
  else
    if s[0] != s[-1]
      false
    else
      is_palindrome?(s[1, s.size - 2])
    end
  end
end
