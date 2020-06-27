# frozen_string_literal: true

require 'byebug'
mapping = {
  'M' => 1000,
  'CM' => 900,
  'D' => 500,
  'CD' => 400,
  'C' => 100,
  'XC' => 90,
  'L' => 50,
  'XL' => 40,
  'X' => 10,
  'IX' => 9,
  'V' => 5,
  'IV' => 4,
  'I' => 1
}
def roman_integer(value, mapping)
  if value.size == 1
    mapping[value]
  else
    rest = value[-1]
    start = value[0, value.size - 1]
    result = roman_integer(start, mapping)
    return result + mapping[rest] if result >= mapping[rest]
    return mapping[rest] - result if result < mapping[rest]

  end
end

p roman_integer('XLI', mapping)
