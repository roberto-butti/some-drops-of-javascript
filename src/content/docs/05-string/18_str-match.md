---
title: "Matching strings against regular expressions"
sidebar:
  label: String match
---

## String match: `String.match()`

The **match()** method in JavaScript retrieves the result of matching a string against a regular expression. It returns an array of matches or null if no matches are found.

Syntax:
```javascript
string.match(regexp)
```

### Parameters:

1. **regexp**: A regular expression object. If not a regular expression, it is implicitly converted to one using `new RegExp(regexp)`.

### Return Value:

The `match()` method returns an array with the matches, or null if no matches are found. The returned array has the following properties:

- If the regular expression doesn't have the global flag (`g`), the array contains the first match found and any capturing groups.
- If the regular expression has the global flag (`g`), the array contains all matches but no capturing groups.

### Examples:

#### Basic Usage:

```javascript
const text = 'The rain in Spain stays mainly in the plain';
const matches = text.match(/ain/g);
console.log(matches); // Output: ["ain", "ain", "ain"]
```

In this example, the `match()` method finds all occurrences of 'ain' in the string and returns them as an array.

#### Without Global Flag:

```javascript
const text = 'The rain in Spain stays mainly in the plain';
const match = text.match(/ain/);
console.log(match);
// Output: ["ain", index: 5, input: "The rain in Spain stays mainly in the plain", groups: undefined]
```

Without the global flag, `match()` returns an array with the first match and additional properties like the index where the match was found.

#### Using Capturing Groups:

```javascript
const text = 'JavaScript was created in 1995';
const match = text.match(/(\w+) was created in (\d+)/);
console.log(match);
// Output: ["JavaScript was created in 1995", "JavaScript", "1995", index: 0, input: "JavaScript was created in 1995", groups: undefined]
```

The first element is the entire match, followed by each captured group.

#### No Match Case:

```javascript
const text = 'Hello, world!';
const matches = text.match(/xyz/);
console.log(matches); // Output: null
```

When no matches are found, `match()` returns null.

### Common Use Cases:

1. **Extracting Information from Text**:

```javascript
function extractEmails(text) {
  const emailRegex = /[\w.-]+@[\w.-]+\.\w+/g;
  return text.match(emailRegex) || [];
}

const content = 'Contact us at support@example.com or sales@example.com for assistance.';
console.log(extractEmails(content)); 
// Output: ["support@example.com", "sales@example.com"]
```

2. **Parsing Data from Formatted Text**:

```javascript
function parseCSVLine(line) {
  return line.match(/(".*?"|[^,]+)(?=,|$)/g)
    .map(item => item.replace(/^"|"$/g, ''));
}

const csvLine = 'John,"Doe,Jr",42,"New York, NY"';
console.log(parseCSVLine(csvLine)); 
// Output: ["John", "Doe,Jr", "42", "New York, NY"]
```

3. **Validating Input Format**:

```javascript
function isValidUsername(username) {
  // Alphanumeric, 3-16 characters
  const match = username.match(/^[a-z0-9]{3,16}$/i);
  return match !== null;
}

console.log(isValidUsername('user123')); // Output: true
console.log(isValidUsername('us')); // Output: false (too short)
console.log(isValidUsername('user@123')); // Output: false (invalid character)
```

### Using match() with String Methods:

The `match()` method is often combined with other string methods for more complex text processing:

```javascript
function countWords(text) {
  const words = text.toLowerCase().match(/\b\w+\b/g) || [];
  return words.length;
}

const paragraph = 'The quick brown fox jumps over the lazy dog.';
console.log(countWords(paragraph)); // Output: 9
```

By using the `String.match()` method, you can perform powerful pattern matching and text extraction operations using regular expressions, which is essential for data validation, parsing, and text analysis in JavaScript applications. 