// Examples for String.trim()

// Basic usage - removing spaces from both ends
const greeting = '   Hello world!   '
console.log(`Original: "${greeting}"`)
console.log(`Trimmed: "${greeting.trim()}"`)
// Output: Trimmed: "Hello world!"

// Removing various whitespace characters
const text = '\t\n  JavaScript is awesome!  \n\r'
console.log(`Original: "${text.replace(/\n/g, '\\n').replace(/\t/g, '\\t').replace(/\r/g, '\\r')}"`)
console.log(`Trimmed: "${text.trim()}"`)
// Output: Trimmed: "JavaScript is awesome!"

// Chaining with other string methods
const userInput = '   hello@example.com   '
const normalizedEmail = userInput.trim().toLowerCase()
console.log(`Original: "${userInput}"`)
console.log(`Normalized: "${normalizedEmail}"`)
// Output: Normalized: "hello@example.com"

// Form validation example
function validateUsername(username) {
    const trimmedUsername = username.trim()
    return trimmedUsername.length >= 3
}

console.log(`Validating '   user   ': ${validateUsername('   user   ')}`) // true
console.log(`Validating '  ab  ': ${validateUsername('  ab  ')}`) // false

// Data cleaning example
const csvData = ['  name ', ' age ', ' city  ']
const cleanData = csvData.map(item => item.trim())
console.log('Original CSV data:', csvData)
console.log('Cleaned data:', cleanData)
// Output: Cleaned data: ["name", "age", "city"] 