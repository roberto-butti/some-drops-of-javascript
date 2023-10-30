---
title: "Concatenating strings"
sidebar:
  label: Concatenate strings
---

Concatenating strings in JavaScript allows you to combine multiple strings into a single string. The String.concat() method is one way to achieve this by joining two or more strings together.

## Concatenating strings: `String.concat()`

The concat() method in JavaScript is used to concatenate one or more strings and return a new string resulting from the combination of these strings.

Syntax:
```javascript

string.concat(string1, string2, ..., stringN)

```

### Parameters:

`string1, string2, ..., stringN`: These are the strings that you want to concatenate with the original string. You can provide one or more strings as arguments to this method. Each string is concatenated to the end of the original string in the order they are provided.

### Return Value:

The `concat()` method returns a new string that is created by concatenating the original string with the strings provided as arguments. It does not modify the original string; instead, it creates and returns a new string.

### Example:

Syntax:
```javascript

const str1 = 'Hello, ';
const str2 = 'world';
const str3 = '!';

const result = str1.concat(str2, str3);

console.log(result); // Output: "Hello, world!"

```

In this example, the concat() method combines the strings `str1`, `str2`, and `str3` to create a new string, which is stored in the `result` variable.

By using the String.concat() method, you can easily concatenate multiple strings together to form a single, larger string, which is a common operation in many JavaScript applications.