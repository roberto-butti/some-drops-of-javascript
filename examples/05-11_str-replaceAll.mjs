const str = 'Hello, world! Hello again, world!'

// Replacing all occurrences of a substring
const replacedHello = str.replaceAll('Hello', 'Hi')
console.log(replacedHello) // Output: "Hi, world! Hi again, world!"

// Replacing all occurrences of a substring that's not found
const replacedUniverse = str.replaceAll('universe', 'galaxy')
console.log(replacedUniverse) // Output: "Hello, world! Hello again, world!"

// Replacing using a regular expression
const replacedWorldWithRegex = str.replaceAll(/world/g, 'earth')
console.log(replacedWorldWithRegex) // Output: "Hello, earth! Hello again, earth!"

// Replacing case-sensitive strings (no match due to case sensitivity)
const replacedCaseSensitive = str.replaceAll('hello', 'Hi')
console.log(replacedCaseSensitive) // Output: "Hello, world! Hello again, world!"

// Replacing special characters
const strWithSymbols = 'This is a $test$ string with $symbols$'
const replacedSymbols = strWithSymbols.replaceAll('$', '#')
console.log(replacedSymbols) // Output: "This is a #test# string with #symbols#"

// Replacing a string with an empty string (removal)
const removedWorld = str.replaceAll('world', '')
console.log(removedWorld) // Output: "Hello, ! Hello again, !"

// Trying to replace a substring in an empty string
const emptyString = ''
const replacedInEmpty = emptyString.replaceAll('world', 'earth')
console.log(replacedInEmpty) // Output: ""
