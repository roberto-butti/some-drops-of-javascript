// Examples for String.lastIndexOf()

// Basic usage
const text = 'JavaScript is amazing. JavaScript is fun.'
console.log('Original text:', text)
const lastIndex = text.lastIndexOf('JavaScript')
console.log('Last index of "JavaScript":', lastIndex) // Output: 25

// Using fromIndex parameter
console.log('\nSearching with fromIndex:')
const lastIndex2 = text.lastIndexOf('JavaScript', 20)
console.log('Last index of "JavaScript" before position 20:', lastIndex2) // Output: 0

// Searching for a character
const text2 = 'Hello, world!'
console.log('\nOriginal text:', text2)
const lastIndex3 = text2.lastIndexOf('o')
console.log('Last index of "o":', lastIndex3) // Output: 8

// Not found case
const lastIndex4 = text2.lastIndexOf('z')
console.log('Last index of "z" (not found):', lastIndex4) // Output: -1

// File extension extraction
function getFileExtension(filename) {
    const dotIndex = filename.lastIndexOf('.')
    return dotIndex === -1 ? '' : filename.substring(dotIndex + 1)
}

console.log('\nExtracting file extensions:')
console.log('document.pdf ->', getFileExtension('document.pdf')) // Output: "pdf"
console.log('image.large.jpg ->', getFileExtension('image.large.jpg')) // Output: "jpg"
console.log('noextension ->', getFileExtension('noextension')) // Output: ""

// Finding the last word in a sentence
function getLastWord(sentence) {
    const lastSpaceIndex = sentence.lastIndexOf(' ')
    return lastSpaceIndex === -1 ? sentence : sentence.substring(lastSpaceIndex + 1)
}

console.log('\nFinding the last word:')
console.log('Hello, world! ->', getLastWord('Hello, world!')) // Output: "world!"
console.log('JavaScript ->', getLastWord('JavaScript')) // Output: "JavaScript"

// Checking if a string ends with a specific substring
function endsWith(str, suffix) {
    const position = str.lastIndexOf(suffix)
    return position !== -1 && position === str.length - suffix.length
}

console.log('\nChecking if string ends with substring:')
console.log('Does "Hello, world!" end with "world!"?', endsWith('Hello, world!', 'world!')) // Output: true
console.log('Does "Hello, world!" end with "Hello"?', endsWith('Hello, world!', 'Hello')) // Output: false

// Compare with built-in endsWith method
console.log('\nComparing with built-in endsWith method:')
console.log('Using built-in: "Hello, world!".endsWith("world!") =', 'Hello, world!'.endsWith('world!'))
console.log('Using built-in: "Hello, world!".endsWith("Hello") =', 'Hello, world!'.endsWith('Hello')) 