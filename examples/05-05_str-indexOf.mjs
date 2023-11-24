const str = 'Hello, world!';

// Finding the index of a substring
const index1 = str.indexOf('world');
console.log(index1); // Output: 7

// Finding the index of a substring with a specified start index
const index2 = str.indexOf('o', 5);
console.log(index2); // Output: 8

// Finding the index of a substring that is not present
const index3 = str.indexOf('universe');
console.log(index3); // Output: -1