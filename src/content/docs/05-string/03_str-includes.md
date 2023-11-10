---
title: "Checking if a string includes a specific substring"
sidebar:
  label: String includes
---
## String includes: `String.includes()`

The **includes()** method in JavaScript is used to determine whether one string can be found within another string. This method returns true if the specified string is found, and false otherwise.

Syntax:
```javascript
string.includes(searchString, position)
```

### The parameters

1. **searchString**: The string to search for within the original string;
2. **position(optional)**: The position within the original string at which to begin searching for the searchString. It is an optional parameter, and if not specified, the search starts from the beginning of the string.

### Return Value:

The `includes()` method returns a boolean value:
1. returns `true` if the searchString is found within the original string.
2. returns `false` if the searchString is not found.

### Example

Syntax:

```javascript
const str = 'Hello, world!';
const isWorldPresent = str.includes('world');
console.log(isWorldPresent);
// Output: true
const isUniversePresent = str.includes('universe');
console.log(isUniversePresent);
// Output: false
```

In this example, the `includes()` method is used to check if the string `'world'` is present in the original string str. The first console.log statement outputs `true` because `'world'` is found in the string. The second `console.log` statement outputs `false` as `'universe'` is not present.

```javascript
const str = 'Hello, world!';
const isWorldPresentFromIndex = str.includes('world', 7);
console.log(isWorldPresentFromIndex);
// Output: false
```

In the example above, the `includes()` method is called with both the `searchString` (`'world'`) and the `position` (`7`) parameters. The position parameter specifies the index at which the search should begin. The console.log statement outputs `false` because, starting from index 7, the `'world'` string is not found in the remaining portion of the string.

The position parameter is 0-index.
For example for indicating the first character of the string you need to use the value 0 as position.

```javascript
const str = 'Hello, world!';
str.includes('Hello', 1)
// false
str.includes('Hello', 0)
// true
```
By using the `String.includes()` method, you can efficiently determine whether a particular substring exists within a given string, providing a convenient way to handle string containment checks in JavaScript applications.
