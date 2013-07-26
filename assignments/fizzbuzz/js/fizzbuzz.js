// Your code goes here

// underscore to create a range
var range = _.range(1,101);

// creating fizzList with _.map
// makes fizzList an array with the function iteration
var fizzList = _.map(list, function(number){
  if (number % 3 === 0 && number % 5 === 0) {
    return ('Fizzbuzz');
  } else if (number % 3 === 0){
    return ('Fizz');
  } else if (number % 5 === 0){
    return  ('Buzz');
  }
});
