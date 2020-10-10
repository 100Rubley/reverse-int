module.exports = function reverse(number) {
  let reverseNumber
  if (number > 0) {
    reverseNumber = number.toString().split('').reverse().join('')
  } else {
    number = number * -1
    reverseNumber = number.toString().split('').reverse().join('')
  }
  return reverseNumber
}

