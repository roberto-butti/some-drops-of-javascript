const str = 'Hello, world!';

// Checking if a string starts with a specific substring
const startsWithHello = str.startsWith('Hello');
console.log(startsWithHello); // Output: true

// Checking if a string starts with a substring at a specific position
const startsWithWorld = str.startsWith('world', 7);
console.log(startsWithWorld); // Output: true

const startsWithHelloWithPosition = str.startsWith('hello', 7)
console.log(startsWithHelloWithPosition); // Output: false

// Checking if a string starts with a substring at a position beyond the string length
const startsWithBeyondLength = str.startsWith('world', 15);
console.log(startsWithBeyondLength); // Output: false

// Checking if a string starts with a substring using a negative position
const startsWithUniverseNegative = str.startsWith('universe', -20);
console.log(startsWithUniverseNegative); // Output: false

const startsWithHelloNegative = str.startsWith('Hello', -20);
console.log(startsWithHelloNegative); // Output: true