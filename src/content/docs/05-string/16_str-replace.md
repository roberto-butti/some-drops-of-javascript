---
title: "Replacing substrings in a string"
sidebar:
  label: String replace
---

## String replace: `String.replace()`

The **replace()** method in JavaScript returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a regular expression, and the replacement can be a string or a function.

Syntax:
```javascript
string.replace(pattern, replacement)
```

### Parameters:

1. **pattern**: A string or regular expression that is matched against the string. If it's a string, only the first occurrence will be replaced.
2. **replacement**: The string that replaces the substring matched by the pattern. It can also be a function that returns the replacement string.

### Return Value:

The `replace()` method returns a new string with some or all matches of the pattern replaced by the replacement. The original string is left unchanged.

### Examples:

#### Basic Usage with String Pattern:

```javascript
const text = 'Hello, world!';
const newText = text.replace('world', 'JavaScript');
console.log(newText); // Output: "Hello, JavaScript!"
```

In this example, the string 'world' is replaced with 'JavaScript'. Note that only the first occurrence is replaced.

#### Using Regular Expression:

```javascript
const text = 'The quick brown fox jumps over the lazy dog.';
const newText = text.replace(/fox|dog/g, 'animal');
console.log(newText); // Output: "The quick brown animal jumps over the lazy animal."
```

By using a regular expression with the global flag (`g`), all occurrences of 'fox' and 'dog' are replaced with 'animal'.

#### Case-Insensitive Replacement:

```javascript
const text = 'JavaScript is awesome. javascript is fun.';
const newText = text.replace(/javascript/i, 'TypeScript');
console.log(newText); // Output: "TypeScript is awesome. javascript is fun."
```

The `i` flag makes the regular expression case-insensitive, but only the first occurrence is replaced because we didn't use the global flag.

#### Using Function as Replacement:

```javascript
const text = 'apple orange banana';
const newText = text.replace(/apple|orange|banana/g, match => match.toUpperCase());
console.log(newText); // Output: "APPLE ORANGE BANANA"
```

Here, a function is used as the replacement, which converts each matched fruit name to uppercase.

### Common Use Cases:

1. **Text Formatting**:

```javascript
function formatPhoneNumber(phoneNumber) {
  // Format: XXX-XXX-XXXX
  return phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
}

console.log(formatPhoneNumber('1234567890')); // Output: "123-456-7890"
```

2. **Sanitizing User Input**:

```javascript
function sanitizeHTML(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

console.log(sanitizeHTML('<script>alert("XSS")</script>')); 
// Output: "&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;"
```

3. **URL Slug Creation**:

```javascript
function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/\s+/g, '-')     // Replace spaces with -
    .replace(/[^\w-]+/g, '')  // Remove all non-word chars
    .replace(/--+/g, '-')     // Replace multiple - with single -
    .replace(/^-+/, '')       // Trim - from start of text
    .replace(/-+$/, '');      // Trim - from end of text
}

console.log(createSlug('Hello World! This is a Title')); // Output: "hello-world-this-is-a-title"
```

By using the `String.replace()` method, you can efficiently perform string substitutions and transformations, which is essential for text processing, data cleaning, and formatting in JavaScript applications. 