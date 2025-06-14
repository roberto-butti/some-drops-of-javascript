// Examples for String.match()

// Basic usage with global flag
const text = 'The rain in Spain stays mainly in the plain'
console.log('Original text:', text)
const matches = text.match(/ain/g)
console.log('Matches for /ain/g:', matches) // Output: ["ain", "ain", "ain"]

// Without global flag
console.log('\nWithout global flag:')
const match = text.match(/ain/)
console.log('Match for /ain/:', match)
// Output includes the match, index, input string, and groups

// Using capturing groups
const text2 = 'JavaScript was created in 1995'
console.log('\nOriginal text:', text2)
const matchWithGroups = text2.match(/(\w+) was created in (\d+)/)
console.log('Match with capturing groups:')
console.log('Full match:', matchWithGroups[0])
console.log('Group 1 (language):', matchWithGroups[1])
console.log('Group 2 (year):', matchWithGroups[2])

// No match case
const text3 = 'Hello, world!'
console.log('\nOriginal text:', text3)
const noMatch = text3.match(/xyz/)
console.log('Match for /xyz/:', noMatch) // Output: null

// Extracting information from text
function extractEmails(text) {
    const emailRegex = /[\w.-]+@[\w.-]+\.\w+/g
    return text.match(emailRegex) || []
}

const content = 'Contact us at support@example.com or sales@example.com for assistance.'
console.log('\nExtracting emails:')
console.log('Original text:', content)
console.log('Extracted emails:', extractEmails(content))
// Output: ["support@example.com", "sales@example.com"]

// Parsing data from formatted text
function parseCSVLine(line) {
    return line.match(/(".*?"|[^,]+)(?=,|$)/g)
        .map(item => item.replace(/^"|"$/g, ''))
}

const csvLine = 'John,"Doe,Jr",42,"New York, NY"'
console.log('\nParsing CSV line:')
console.log('Original CSV:', csvLine)
console.log('Parsed values:', parseCSVLine(csvLine))
// Output: ["John", "Doe,Jr", "42", "New York, NY"]

// Validating input format
function isValidUsername(username) {
    // Alphanumeric, 3-16 characters
    const match = username.match(/^[a-z0-9]{3,16}$/i)
    return match !== null
}

console.log('\nValidating usernames:')
console.log('Is "user123" valid?', isValidUsername('user123')) // Output: true
console.log('Is "us" valid?', isValidUsername('us')) // Output: false (too short)
console.log('Is "user@123" valid?', isValidUsername('user@123')) // Output: false (invalid character)

// Counting words
function countWords(text) {
    const words = text.toLowerCase().match(/\b\w+\b/g) || []
    return words.length
}

const paragraph = 'The quick brown fox jumps over the lazy dog.'
console.log('\nCounting words:')
console.log('Text:', paragraph)
console.log('Word count:', countWords(paragraph)) // Output: 9 