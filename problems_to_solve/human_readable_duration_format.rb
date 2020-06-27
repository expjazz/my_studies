# frozen_string_literal: true

def format_duration(seconds)
  # 1 minute = 60 secods
  # 1 hour = 3600 seconds
  # day = 86400
  # year = 31536000
  return 'now' if seconds.zero?

  if seconds < 60
    return '1 second' if seconds == 1

    " and #{seconds} seconds"
  elsif seconds < 3600 && seconds > 60
    minutes = seconds / 60
    a = '1 minute' if minutes == 1
    a = "#{minutes} minutes" if minutes > 1
    seconds -= minutes * 60
    seconds = format_duration(seconds)
    seconds = '' if seconds.include?('now')
    a + seconds
  elsif seconds < 86_400 && seconds >= 3600
    hours = seconds / 3600
    b = '1 hour' if hours == 1
    b = "#{hours} hours" if hours > 1
    seconds -= hours * 60 * 60
    seconds = format_duration(seconds)
    seconds = '' if seconds == 'now'
    return  "#{b}, #{seconds}" if seconds != ''
    return  "#{b}, and #{seconds}" if seconds == ''

    b

  elsif seconds < 31_536_000 && seconds >= 86_400
    days = seconds / 86_400
    c = '1 day' if days == 1
    c = "#{days} days" if days > 1
    seconds -= days * 60 * 60 * 24
    seconds = format_duration(seconds)
    seconds = '' if seconds == 'now'
    return  "#{c}, #{seconds}" if seconds != ''
    return  "#{c}, and #{seconds}" if seconds == ''

    c

  elsif seconds > 31_536_000
    years = seconds / 31_536_000
    d = '1 year' if years == 1
    d = "#{years} years" if years > 1
    seconds -= years * 60 * 60 * 24 * 365
    seconds = format_duration(seconds)
    seconds = '' if seconds == 'now'
    return  "#{d}, #{seconds}" if seconds != ''
    return  "#{d}, and #{seconds}" if seconds == ''

    d

  end
end

p format_duration((45 * 20))
