# Given a set of characters and a positive integer k, 
# print all possible strings of length k that can be
# formed from the given set.

def possible_strings(k, set)
  n = set.length
  return possible_strings_rec(set,"", n, k)
end

def possible_strings_rec(set, prefix, n, k)
  if k.zero?
    return prefix
  end
  set.each { |x| newp = prefix + x}
  
  possible_strings_rec(set, newp, n, k - 1)
  
end

p possible_strings(3, ['a', 'b'])