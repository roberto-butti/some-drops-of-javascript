---
title: "Repeating a String"
sidebar:
  label: Repeating a String
---
## String repeat: `String.repeat()`

The `repeat()` method in JavaScript is used to create a new string by repeating the original string a specified number of times.

Syntax:
```javascript
string.repeat(count)
```

### The parameters

1. **count**: The number of times to repeat the original string. Must be a non-negative integer.

### Return Value:

The `repeat()` method returns a new string representing the original string repeated the specified number of times.

### Example

```javascript
// Repeating a string multiple times
const str = 'Hello, ';

const repeatedString = str.repeat(3);
console.log(repeatedString);
// Output: "Hello, Hello, Hello, "
```

In the example above, the `repeat()` method is used to create a **new string** by repeating the original string 'Hello, ' `three` times. The resulting string, "Hello, Hello, Hello, ", is stored in the variable repeatedString.

```javascript
// Repeating a string zero times
const str = 'Hello Javascript!';

const repeatedString = str.repeat(0);
console.log(repeatedString);
// Output: ""
```

In this example, the `repeat()` method is used to create a new string by repeating the original string 'Hello Javascript!' `zero` times. The resulting string is an `empty string, "",` as the count is zero.

```javascript
// Repeating a string with a non-integer count
const str = 'repeatString()';

const repeatedString = str.repeat(2.5);
console.log(repeatedString);
// Output: "repeatString()repeatString()"
```

In this example, the `repeat()` method is used with a non-integer count of `2.5`. The method automatically converts the count to an `integer (2 in this case)` and repeats the original string `'repeatString()'` accordingly. The resulting string, "repeatString()repeatString()", is stored in the variable repeatedString.

By using the `String.repeat()` method, you can easily generate repeated strings, providing a convenient way to handle string repetition in JavaScript.