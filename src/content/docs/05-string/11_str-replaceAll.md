---
title: "Replacing All Occurrences of a Substring"
sidebar:
  label: String replaceAll
---
## String replaceAll: `String.replaceAll()`

The `replaceAll()` method in JavaScript is used to replace all occurrences of a specified substring with another substring. It returns a new string with all matches of the substring replaced.

Syntax:
```javascript
string.replaceAll(searchValue, newValue)
```

### The parameters

1. **searchValue**: The substring or regular expression to search for within the string.
2. **newValue**: The string to replace each match of searchValue with.

### Return Value:

The `replaceAll()` method returns a new string where all occurrences of the `searchValue` have been replaced by the `newValue`.

### Example

```javascript
// Replacing all occurrences of a substring
const str = 'Hello, world! Hello again, world!';

const replacedHello = str.replaceAll('Hello', 'Hi');
console.log(replacedHello);
// Output: "Hi, world! Hi again, world!"
```

In this example, the `replaceAll()` method is used to replace all occurrences of the substring 'Hello' with 'Hi'. The result, `"Hi, world! Hi again, world!"`, is stored in the variable `replacedHello`.

```javascript
// Replacing all occurrences of a substring that's not found
const str = 'Hello, world!';

const replacedUniverse = str.replaceAll('universe', 'galaxy');
console.log(replacedUniverse);
// Output: "Hello, world!"
```

In this example, the `replaceAll()` method is used to attempt to replace the substring 'universe', which is not present in the string 'Hello, world!'. Since 'universe' is not found, the original string is returned unchanged.

```javascript
// Replacing using a regular expression
const str = 'Hello, world! Hello again, world!';

const replacedWorldWithRegex = str.replaceAll(/world/g, 'earth');
console.log(replacedWorldWithRegex);
// Output: "Hello, earth! Hello again, earth!"
```

In this example, a regular expression `/world/g` is used with the `replaceAll()` method to replace all occurrences of 'world' with 'earth'. The result is `"Hello, earth! Hello again, earth!"`.

```javascript
// Replacing case-sensitive strings
const str = 'Hello, world!';

const replacedCaseSensitive = str.replaceAll('hello', 'Hi');
console.log(replacedCaseSensitive);
// Output: "Hello, world!"
```

In this example, the `replaceAll()` method attempts to replace the lowercase 'hello' in the string 'Hello, world!'. Since the method is case-sensitive, no replacement occurs, and the original string is returned.

```javascript
// Replacing special characters
const strWithSymbols = 'This is a $test$ string with $symbols$';

const replacedSymbols = strWithSymbols.replaceAll('$', '#');
console.log(replacedSymbols);
// Output: "This is a #test# string with #symbols#"
```

In this example, the `replaceAll()` method is used to replace the special character `$` with `#` in the string. All occurrences of `$` are replaced.

```javascript
// Replacing a substring with an empty string
const str = 'Hello, world! Hello again, world!';

const removedWorld = str.replaceAll('world', '');
console.log(removedWorld);
// Output: "Hello, ! Hello again, !"
```

In this example, the `replaceAll()` method is used to remove all occurrences of 'world' by replacing them with an empty string `''`. The result is `"Hello, ! Hello again, !"`.

### See also

- [String.prototype.replaceAll()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll)
