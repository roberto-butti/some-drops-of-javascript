---
title: "Removing whitespace from both ends of a string"
sidebar:
  label: String trim
---

## String trim: `String.trim()`

The **trim()** method in JavaScript removes whitespace from both ends of a string. Whitespace characters include spaces, tabs, no-break spaces, and all line terminator characters (such as line feed, carriage return, etc.).

Syntax:
```javascript
string.trim()
```

### Parameters:

The `trim()` method doesn't take any parameters.

### Return Value:

The `trim()` method returns a new string with whitespace removed from both ends of the original string. It does not modify the original string.

### Examples:

#### Basic Usage:

```javascript
const greeting = '   Hello world!   ';
console.log(greeting.trim());
// Output: "Hello world!"
```

In this example, the `trim()` method removes the spaces from both the beginning and the end of the string.

#### Removing Various Whitespace Characters:

```javascript
const text = '\t\n  JavaScript is awesome!  \n\r';
console.log(text.trim());
// Output: "JavaScript is awesome!"
```

This example demonstrates how `trim()` removes all types of whitespace characters, including tabs (`\t`), line feeds (`\n`), and carriage returns (`\r`).

#### Chaining with Other String Methods:

```javascript
const userInput = '   hello@example.com   ';
const normalizedEmail = userInput.trim().toLowerCase();
console.log(normalizedEmail);
// Output: "hello@example.com"
```

Here, we first remove the whitespace using `trim()` and then convert the string to lowercase using `toLowerCase()`.

### Common Use Cases:

1. **Form Validation**: When validating user input from forms, `trim()` is commonly used to remove accidental spaces that users might have entered.

```javascript
function validateUsername(username) {
  const trimmedUsername = username.trim();
  return trimmedUsername.length >= 3;
}

console.log(validateUsername('   user   ')); // true
console.log(validateUsername('  ab  ')); // false
```

2. **Data Cleaning**: When processing data from external sources, `trim()` helps in cleaning up the data by removing unnecessary whitespace.

```javascript
const csvData = ['  name ', ' age ', ' city  '];
const cleanData = csvData.map(item => item.trim());
console.log(cleanData);
// Output: ["name", "age", "city"]
```

By using the `String.trim()` method, you can easily remove unwanted whitespace from the beginning and end of strings, which is particularly useful for cleaning user input and processing data in JavaScript applications. 