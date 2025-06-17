// Examples for String.endsWith()

// Basic usage
const sentence = 'This is a complete sentence.'
console.log(`"${sentence}" ends with "sentence.": ${sentence.endsWith('sentence.')}`)
// Output: true
console.log(`"${sentence}" ends with "question.": ${sentence.endsWith('question.')}`)
// Output: false

// Using the length parameter
const filename = 'document.pdf'
console.log(`"${filename}" ends with "pdf": ${filename.endsWith('pdf')}`)
// Output: true

// Check if the first 8 characters end with 'doc'
console.log(`First 8 chars of "${filename}" end with "doc": ${filename.endsWith('doc', 8)}`)
// Output: true

// Case sensitivity
const text = 'JavaScript is awesome!'
console.log(`"${text}" ends with "awesome!": ${text.endsWith('awesome!')}`)
// Output: true
console.log(`"${text}" ends with "AWESOME!": ${text.endsWith('AWESOME!')}`)
// Output: false

// File extension validation
function isImageFile(filename) {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp']
    return imageExtensions.some(ext => filename.toLowerCase().endsWith(ext))
}

console.log(`"vacation.jpg" is an image file: ${isImageFile('vacation.jpg')}`)
// Output: true
console.log(`"document.pdf" is an image file: ${isImageFile('document.pdf')}`)
// Output: false

// URL validation
function isSecureGoogleUrl(url) {
    return url.toLowerCase().endsWith('.google.com') && url.startsWith('https://')
}

console.log(`"https://www.google.com" is a secure Google URL: ${isSecureGoogleUrl('https://www.google.com')}`)
// Output: true
console.log(`"http://www.google.com" is a secure Google URL: ${isSecureGoogleUrl('http://www.google.com')}`)
// Output: false

// String formatting validation
function endsWithPunctuation(text) {
    const punctuation = ['.', '!', '?']
    return punctuation.some(p => text.endsWith(p))
}

console.log(`"Hello world!" ends with punctuation: ${endsWithPunctuation('Hello world!')}`)
// Output: true
console.log(`"Hello world" ends with punctuation: ${endsWithPunctuation('Hello world')}`)
// Output: false
