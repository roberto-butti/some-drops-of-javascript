---
title: "Finding the Index of a Substring in a String"
sidebar:
  label: String indexOf
---
## String indexOf: `String.indexOf()`

The `indexOf()` method in JavaScript is used to find the index of the **first occurrence** of a specified substring within a string.

Syntax:
```javascript
string.indexOf(searchValue, startIndex)
```

### The parameters

1. **searchValue**: The substring to search for within the original string.

2. **startIndex (optional)**: The index at which to start the search. If not specified, the search starts from the beginning of the string.

### Return Value:

The `indexOf()` method returns **an integer** representing the index of the first occurrence of the specified substring. If the substring is **not found**, it returns `-1`.

### Example

```javascript
// Finding the index of a substring
const str = 'Hello, world!';

const index = str.indexOf('world');
console.log(index);
// Output: 7
```

In the example above, The `indexOf()` method is used to find the index of the first occurrence of the substring 'world' within the original string str. The resulting index, `7`, is stored in the variable index.

```javascript
// Finding the index of a substring with a specified start index
const str = 'Hello, world!';

const index = str.indexOf('o', 5);
console.log(index);
// Output: 8
```

In the example above, The `indexOf()` method is used to find the index of the first occurrence of the character 'o' within the original string **str**. The search starts from index `5`. The resulting index, `8`, is stored in the variable index.

```javascript
// Finding the index of a substring that is not present
const str = 'Hello, world!';

const index = str.indexOf('universe');
console.log(index);
// Output: -1
```

In the example above, The `indexOf()`  method is used to find the index of the first occurrence of the substring **'universe'** within the original string str. Since 'universe' is not present in the string, the method returns `-1`, which is stored in the variable index.

By using the `String.indexOf()` method, you can efficiently determine the position of a specified substring within a given string, allowing for various string manipulation operations in JavaScript.