// Simple example of using process.cwd()

// 1. Get and display the current working directory
console.log('Current working directory:')
console.log(process.cwd())

// 2. Use process.cwd() to create a file path
const path = require('path')
const filePath = path.join(process.cwd(), 'example.txt')

console.log('\nFile path using current working directory:')
console.log(filePath)

// 3. Display the components of the file path
console.log('\nComponents of the file path:')
console.log('Directory:', path.dirname(filePath))
console.log('File name:', path.basename(filePath))

// Note: This example doesn't create or modify any files
