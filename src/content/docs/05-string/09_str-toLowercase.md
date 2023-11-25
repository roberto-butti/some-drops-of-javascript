---
title: "Converting a String to Lowercase"
sidebar:
  label: Converting a String to Lowercase
---
## String lowercase: `String.toLowerCase()`

The `toLowerCase()` method in JavaScript is used to convert all characters in a string to lowercase. This can be beneficial for ensuring consistency in **character casing, aiding in comparisons** and display.

Syntax:
```javascript
string.toLowerCase()
```

### Return Value:

The `toLowerCase()` method returns a new string with all alphabetic characters converted to `lowercase`.

### Example

```javascript
// Converting a string to lowercase
const str = 'Hello, World!';

const lowercasedString = str.toLowerCase();
console.log(lowercasedString);
// Output: "hello, world!"
```

In the example above, the `toLowerCase()` method is applied to the string 'Hello, World!' to convert all characters to `lowercase`. The resulting string, "hello, world!", is stored in the variable lowercasedString.

By using the String.`toLowerCase()` method, you can easily achieve a consistent `lowercase` format for strings in your JavaScript applications. This is particularly useful for scenarios where case-insensitive comparisons or standardized formatting are required.