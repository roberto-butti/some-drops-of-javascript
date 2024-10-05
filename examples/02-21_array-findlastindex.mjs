// using findLastIndex() method to get the last index of the element that passes the test
const numbers = [5, 12, 8, 130, 44]

// storing the last index value in lastIndex variable
let lastIndex = numbers.findLastIndex(checkLargeNumber)

// printing last index value
console.log(lastIndex)

// testing function, passed as a callback to findLastIndex() method
function checkLargeNumber(num) {
  return num > 10
}

// findLastIndex() returns -1 when no element match is found
const new_numbers = [1, 2, 3, 4, 5]

// storing the last index value in lastIndex variable
lastIndex = new_numbers.findLastIndex(checkLargeNumber)

// printing the lastIndex variable value (-1)
console.log(lastIndex)
