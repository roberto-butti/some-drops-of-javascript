---
title: "Extracting a substring from a string"
sidebar:
  label: String slice
---
## String slice: `String.slice()`

The `slice()` method in JavaScript is used to extract a portion of a string and return it as a new string without modifying the original string.

Syntax:
```javascript
string.slice(start, end)
```

### The parameters

1. **start**: The index at which the extraction will begin. If negative, it counts from the end of the string.

2. **end (optional)**: The index at which the extraction will end. If not specified, the extraction goes to the end of the string. If negative, it counts from the end of the string.

:::note
The character at the **end** index is **not included** in the returned string.
:::

### Return Value:

The `slice()` method returns **a new string** representing the extracted portion of the original string.

### Example

```javascript
// Using only the start parameter
const str = 'Hello, world!';

const slicedString = str.slice(7);
console.log(slicedString);
// Output: "world!"
```

In the example above, The `slice()` method extracts the portion of the string starting from index `7` to the end `(str.length - 1)`. The extracted substring, `'world!'`, is stored in the variable slicedString.

```javascript
// Using both start and end parameters
const str = 'Hello, world!';

const slicedString = str.slice(1, 4);
console.log(slicedString);
// Output: "ell"
```

In the example above, The `slice()` method extracts the portion of the string starting from index `1` and ending at index `4(exclusive)`. The extracted substring, `'ell'`, is stored in the variable slicedString.

```javascript
// Using negative indices with only start parameter
const str = 'Hello, world!';

const slicedString = str.slice(-6);
console.log(slicedString);
// Output: "world!"
```

In the example above, The `slice()` method extracts the portion of the string starting from the 6th character from the end to the end of the string. The extracted substring, `'world!'`, is stored in the variable slicedString.

```javascript
// Using negative indices with both start and end parameter
const str = 'Hello, world!';

const slicedString = str.slice(-6, -3);
console.log(slicedString);
// Output: "wor"
```

In the example above, The `slice()` method extracts the portion of the string starting from the 6th character from the end to the 3rd character from the end (exclusive). The extracted substring, `'wor'`, is stored in the variable slicedString.

By using the `String.slice()` method, you can efficiently extract substrings from a given string based on the specified indices, noting that the character at the end index is not included in the returned string.