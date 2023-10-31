// Examples for String.concat()

// Concatenating two strings
const str1 = 'Hello, ';
const str2 = 'world';
const result1 = str1.concat(str2);
console.log(result1); // Output: "Hello, world"

// Concatenating multiple strings
const str3 = 'This';
const str4 = ' is';
const str5 = ' an';
const str6 = ' example.';
const result2 = str3.concat(str4, str5, str6);
console.log(result2); // Output: "This is an example."

// Combining strings with different delimiters
const str7 = 'Concatenate';
const str8 = 'these';
const str9 = 'strings';
const delimiter = ' - ';
const result3 = str7.concat(delimiter, str8, delimiter, str9);
console.log(result3); // Output: "Concatenate - these - strings"