---
title: "Splitting a String into an Array"
sidebar:
  label: Splitting a String into an Array
---
## String split: `String.split()`

The `split()` method in JavaScript is used to split a string into an array of substrings based on a specified delimiter.

Syntax:
```javascript
string.split(separator, limit)
```

### The parameters

1. **separator**: The character or **regular expression** used to specify where to split the string. If an empty string is used (''), the string is split into an array of individual characters.
2. **limit (optional)**: An integer that specifies the maximum number of splits. The array will contain at most limit + 1 elements. If not specified or is negative, there is no limit to the number of splits.

### Return Value:

The `split()` method returns an array of substrings resulting from the split.

### Example

```javascript
// Splitting a string based on a space separator
const str = 'Hello, world!';

const splitArray = str.split(' ');
console.log(splitArray);
// Output: ["Hello,", "world!"]
```

In the example above, the `split()` method is used to split the string 'Hello, world!' into an array of substrings based on the `space separator`. The resulting array, ["Hello,", "world!"], is stored in the variable splitArray.

```javascript
// Splitting a string based on a comma separator with a specified limit
const str = 'apple,orange,banana,grape';

const splitArray = str.split(',', 2);
console.log(splitArray);
// Output: ["apple", "orange"]
```

In this example, the `split()` method is used to split the string 'apple,orange,banana,grape' into an array of substrings based on the `comma` separator. The specified `limit of 2` restricts the number of splits to at most two. The resulting array, ["apple", "orange"], is stored in the variable splitArray.

```javascript
// Splitting a string into individual characters
const str = 'Hello';

const splitArray = str.split('');
console.log(splitArray);
// Output: ["H", "e", "l", "l", "o"]
```

In this example, the `split()` method is used to split the string 'Hello' into an array of `individual` characters by using `an empty string` as the separator. The resulting array, ["H", "e", "l", "l", "o"], is stored in the variable splitArray.

By using the `String.split()` method, you can easily convert a string into an array of substrings, providing a versatile way to manipulate and process string data in JavaScript.