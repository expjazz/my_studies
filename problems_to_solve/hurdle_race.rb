# frozen_string_literal: true

def hurdleRace(k, height)
  r = height.max - k
  return r if r.positive?

  0
  end
