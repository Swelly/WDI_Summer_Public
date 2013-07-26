# Done in JS? Now do it in Ruby.

for num in 1..100 do

  fizzBuzz = false
  if num % 3 == 0
    print "Fizz"
    fizzBuzz = true
  end

  if num % 5 == 0
    print "Buzz"
    fizzBuzz = true
  end

  if fizzBuzz == false
    print num
  end

  puts

end
