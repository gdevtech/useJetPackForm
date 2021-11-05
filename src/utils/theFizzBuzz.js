export function theFizzBuzz(number) {
  let fizzBuzzTalk;
  if ( number % 3 === 0 && number % 5 === 0) {
    fizzBuzzTalk = `${number} - FizzBuzz`;
  }
  else if ( number % 3 === 0) {
    fizzBuzzTalk = `${number} - Fizz`;
  }
  else if ( number % 5 === 0) {
    fizzBuzzTalk = `${number} - Buzz`;
  }
  else {
    fizzBuzzTalk = number;
  }
  return fizzBuzzTalk;
}