# frozen_string_literal: true

mapping = {
  1000 => 'M',
  900 => 'CM',
  500 => 'D',
  400 => 'CD',
  100 => 'C',
  90 => 'XC',
  50 => 'L',
  40 => 'XL',
  10 => 'X',
  9 => 'IX',
  5 => 'V',
  4 => 'IV',
  1 => 'I'
}
def integer_roman(value, mapping)
  mapping.each do |k, v|
    if value == k
      return v
    elsif value > k
      return v + integer_roman((value - k), mapping)
    end
  end
end

p integer_roman(49, mapping)
