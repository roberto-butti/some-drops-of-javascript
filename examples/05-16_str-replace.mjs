// Examples for String.replace()

// Basic usage with string pattern
const text = 'Hello, world!'
console.log('Original text:', text)
const newText = text.replace('world', 'JavaScript')
console.log('After replace:', newText) // Output: "Hello, JavaScript!"

// Using regular expression
const text2 = 'The quick brown fox jumps over the lazy dog.'
console.log('\nOriginal text:', text2)
const newText2 = text2.replace(/fox|dog/g, 'animal')
console.log('After replace with regex:', newText2)
// Output: "The quick brown animal jumps over the lazy animal."

// Case-insensitive replacement
const text3 = 'JavaScript is awesome. javascript is fun.'
console.log('\nOriginal text:', text3)
const newText3 = text3.replace(/javascript/i, 'TypeScript')
console.log('After case-insensitive replace:', newText3)
// Output: "TypeScript is awesome. javascript is fun."

// Using function as replacement
const text4 = 'apple orange banana'
console.log('\nOriginal text:', text4)
const newText4 = text4.replace(/apple|orange|banana/g, match => match.toUpperCase())
console.log('After replace with function:', newText4)
// Output: "APPLE ORANGE BANANA"

// Text formatting - Phone number
function formatPhoneNumber(phoneNumber) {
    // Format: XXX-XXX-XXXX
    return phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
}

console.log('\nFormatting phone number:')
console.log('1234567890 ->', formatPhoneNumber('1234567890'))
// Output: "123-456-7890"

// Sanitizing user input
function sanitizeHTML(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    }
    return text.replace(/[&<>"']/g, m => map[m])
}

console.log('\nSanitizing HTML:')
console.log('<script>alert("XSS")</script> ->', sanitizeHTML('<script>alert("XSS")</script>'))
// Output: "&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;"

// URL slug creation
function createSlug(title) {
    return title
        .toLowerCase()
        .replace(/\s+/g, '-')     // Replace spaces with -
        .replace(/[^\w-]+/g, '')  // Remove all non-word chars
        .replace(/--+/g, '-')     // Replace multiple - with single -
        .replace(/^-+/, '')       // Trim - from start of text
        .replace(/-+$/, '')       // Trim - from end of text
}

console.log('\nCreating URL slug:')
console.log('Hello World! This is a Title ->', createSlug('Hello World! This is a Title'))
// Output: "hello-world-this-is-a-title" 