const str = 'Hello, world!';

// Using only the start parameter
const slicedString1 = str.slice(7);
console.log(slicedString1); // Output: "world!"

// Using both start and end parameters
const slicedString2 = str.slice(1, 4);
console.log(slicedString2); // Output: "ell"

// Using negative indices with only start parameter
const slicedString3 = str.slice(-6);
console.log(slicedString3); // Output: "world!"

// Using negative indices with both start and end parameter
const slicedString4 = str.slice(-6, -3);
console.log(slicedString4); // Output: "wor"