const str = 'Hello, '

// Repeating a string multiple times
const repeatedString1 = str.repeat(3)
console.log(repeatedString1)
// Output: "Hello, Hello, Hello, "

// Repeating a string zero times
const repeatedString2 = str.repeat(0)
console.log(repeatedString2)
// Output: ""

// Repeating a string with a non-integer count
const repeatedString = str.repeat(2.5)
console.log(repeatedString)
// Output: "Hello, Hello, "
