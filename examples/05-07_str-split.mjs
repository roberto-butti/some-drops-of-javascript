// Splitting a string based on a space separator
const str1 = 'Hello, world!'
const splitArray1 = str1.split(' ')
console.log(splitArray1)
// Output: ["Hello,", "world!"]

// Splitting a string based on a comma separator with a specified limit
const str2 = 'apple,orange,banana,grape'
const splitArray2 = str2.split(',', 2)
console.log(splitArray2)
// Output: ["apple", "orange"]

// Splitting a string into individual characters
const str3 = 'Hello'
const splitArray3 = str3.split('')
console.log(splitArray3)
// Output: ["H", "e", "l", "l", "o"]
