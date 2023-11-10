const str = 'Hello, world!';

// Examples of includes() with one parameter

const isWorldPresent = str.includes('world');
console.log(isWorldPresent); // Output: true

const isUniversePresent = str.includes('universe');
console.log(isUniversePresent); // Output: false

// Examples of includes() with two parameter

const isWorldPresentFromIndex = str.includes('world', 7);
console.log(isWorldPresentFromIndex); // Output: false