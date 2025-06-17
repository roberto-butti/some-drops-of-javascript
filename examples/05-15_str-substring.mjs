// Examples for String.substring()

// Basic usage
const text = 'JavaScript'
console.log('Original text:', text)
console.log('text.substring(0, 4):', text.substring(0, 4)) // Output: "Java"
console.log('text.substring(4):', text.substring(4)) // Output: "Script"

// Handling out-of-range indices
const shortText = 'Hello'
console.log('\nOriginal text:', shortText)
console.log('shortText.substring(-3, 2):', shortText.substring(-3, 2)) // Output: "He" (negative treated as 0)
console.log('shortText.substring(2, 10):', shortText.substring(2, 10)) // Output: "llo" (out of range)

// Swapping parameters
console.log('\nDemonstrating parameter swapping:')
console.log('text.substring(4, 0):', text.substring(4, 0)) // Output: "Java" (swaps indices)
console.log('text.substring(0, 4):', text.substring(0, 4)) // Output: "Java" (for comparison)

// Comparison with slice()
console.log('\nComparing substring() with slice():')
console.log('text.substring(-3):', text.substring(-3)) // Output: "JavaScript" (treats -3 as 0)
console.log('text.slice(-3):', text.slice(-3)) // Output: "ipt" (counts from the end)

// Extracting a portion of text
function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
        return text
    }
    return text.substring(0, maxLength) + '...'
}

const longText = 'This is a very long text that needs to be truncated'
console.log('\nTruncating text:')
console.log('Original:', longText)
console.log('Truncated to 20 chars:', truncateText(longText, 20)) // Output: "This is a very long..."

// Parsing URL components
function getDomainFromUrl(url) {
    // Remove protocol
    let domain = url
    if (url.indexOf('://') > -1) {
        domain = url.substring(url.indexOf('://') + 3)
    }

    // Remove path
    if (domain.indexOf('/') > -1) {
        domain = domain.substring(0, domain.indexOf('/'))
    }

    return domain
}

console.log('\nExtracting domain from URL:')
console.log('URL: https://example.com/path')
console.log('Domain:', getDomainFromUrl('https://example.com/path')) // Output: "example.com"

// Removing specific characters
function removeFirstAndLastChar(text) {
    return text.substring(1, text.length - 1)
}

console.log('\nRemoving first and last characters:')
console.log('Original: "quoted"')
console.log('Result:', removeFirstAndLastChar('"quoted"')) // Output: "quoted" 