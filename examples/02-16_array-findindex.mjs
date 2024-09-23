// using findIndex() method to get the first index of the element that passes the test
const ages = [3, 10, 18, 20]

// storing the index value in index variable
let index = ages.findIndex(checkAge)

// printing the index value (3)
console.log(index)

// testing function, passed as a callback to findIndex() method
function checkAge(age) {
  return age > 18
}

// findIndex() returns -1 when no element match is found
const newAges = [3, 10, 13, 15]

// storing the index value in index variable
index = newAges.findIndex(checkAge)

// printing the index value (-1)
console.log(index)
