---
title: "Converting a String to Uppercase"
sidebar:
  label: Converting a String to Uppercase
---
## String uppercase: `String.toUpperCase()`

The `toUpperCase()` method in JavaScript is used to convert all characters in a string to uppercase. This is particularly useful when you want to standardize the case of characters for consistent comparison or display.

Syntax:
```javascript
string.toUpperCase()
```

### Return Value:

The `toUpperCase()` method returns a new string with all alphabetic characters converted to uppercase.

### Example

```javascript
// Converting a string to uppercase
const str = 'Hello, world!';

const upperCasedString = str.toUpperCase();
console.log(upperCasedString);
// Output: "HELLO, WORLD!"
```

In the example above, the `toUpperCase()` method is applied to the string 'Hello, world!' to convert all characters to uppercase. The resulting string, "HELLO, WORLD!", is stored in the variable upperCasedString.

By using the `String.toUpperCase()` method, you can easily ensure a consistent uppercase format for strings in your JavaScript applications. This is particularly useful for scenarios where case-insensitive comparisons or standardized formatting are required.