// Examples for Array.reverse()

// Basic usage
const fruits = ['Apple', 'Banana', 'Orange', 'Mango']
console.log('Original array:', fruits)
fruits.reverse()
console.log('Reversed array:', fruits)
// Output: ["Mango", "Orange", "Banana", "Apple"]

// Reversing a numeric array
const numbers = [1, 2, 3, 4, 5]
console.log('\nOriginal numbers:', numbers)
numbers.reverse()
console.log('Reversed numbers:', numbers)
// Output: [5, 4, 3, 2, 1]

// Chaining with other array methods
const originalNumbers = [1, 2, 3, 4, 5]
console.log('\nOriginal array:', originalNumbers)
const reversed = [...originalNumbers].reverse()
console.log('Original array (unchanged):', originalNumbers)
console.log('New reversed array:', reversed)
// Output: 
// Original: [1, 2, 3, 4, 5]
// Reversed: [5, 4, 3, 2, 1]

// Reversing a string using array methods
const str = 'Hello World'
console.log('\nOriginal string:', str)
const reversedStr = str.split('').reverse().join('')
console.log('Reversed string:', reversedStr)
// Output: "dlroW olleH"

// Reversing a copy of an array
function reverseArrayCopy(array) {
    return [...array].reverse()
}

const original = [1, 2, 3, 4, 5]
console.log('\nOriginal array:', original)
const reversedCopy = reverseArrayCopy(original)
console.log('Original array (unchanged):', original)
console.log('Reversed copy:', reversedCopy)
// Output:
// Original: [1, 2, 3, 4, 5]
// Reversed: [5, 4, 3, 2, 1]

// Implementing a palindrome check
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '')
    // Compare with its reverse
    return cleanStr === cleanStr.split('').reverse().join('')
}

console.log('\nPalindrome checks:')
console.log('Is "A man, a plan, a canal: Panama" a palindrome?',
    isPalindrome('A man, a plan, a canal: Panama')) // Output: true
console.log('Is "race a car" a palindrome?',
    isPalindrome('race a car')) // Output: false

// Creating a reverse iterator
function* reverseIterator(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        yield array[i]
    }
}

const letters = ['a', 'b', 'c', 'd']
console.log('\nOriginal array:', letters)
console.log('Using reverse iterator:')
for (const item of reverseIterator(letters)) {
    console.log(item)
}
// Output:
// "d"
// "c"
// "b"
// "a"

// Reversing nested arrays
const nestedArray = [[1, 2], [3, 4], [5, 6]]
console.log('\nOriginal nested array:', nestedArray)
nestedArray.reverse()
console.log('Top-level reversed:', nestedArray)
// Output: [[5, 6], [3, 4], [1, 2]]

// Deep reversing nested arrays
const nestedArray2 = [[1, 2], [3, 4], [5, 6]]
console.log('\nOriginal nested array:', nestedArray2)
const deepReversed = nestedArray2.map(subArray => subArray.reverse()).reverse()
console.log('Deep reversed:', deepReversed)
// Output: [[6, 5], [4, 3], [2, 1]] 