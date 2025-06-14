---
title: "Checking if a string ends with a specific substring"
sidebar:
  label: String endsWith
---

## String endsWith: `String.endsWith()`

The **endsWith()** method in JavaScript determines whether a string ends with the characters of a specified string. This method returns true if the string ends with the specified string, and false otherwise.

Syntax:
```javascript
string.endsWith(searchString, length)
```

### Parameters:

1. **searchString**: The characters to be searched for at the end of the string.
2. **length (optional)**: The length of the string to search within. This allows you to specify a portion of the string to check. If omitted, the default is the length of the string.

### Return Value:

The `endsWith()` method returns a boolean value:
- `true` if the string ends with the characters of the searchString
- `false` if the string does not end with the characters of the searchString

### Examples:

#### Basic Usage:

```javascript
const sentence = 'This is a complete sentence.';
console.log(sentence.endsWith('sentence.')); // Output: true
console.log(sentence.endsWith('question.')); // Output: false
```

In this example, the `endsWith()` method checks if the string ends with 'sentence.' (which it does) and 'question.' (which it doesn't).

#### Using the Length Parameter:

```javascript
const filename = 'document.pdf';
console.log(filename.endsWith('pdf')); // Output: true

// Check if the first 8 characters end with 'doc'
console.log(filename.endsWith('doc', 8)); // Output: true
```

In this example, we first check if the filename ends with 'pdf'. Then, by specifying a length of 8, we check if the first 8 characters ('document') end with 'doc'.

#### Case Sensitivity:

```javascript
const text = 'JavaScript is awesome!';
console.log(text.endsWith('awesome!')); // Output: true
console.log(text.endsWith('AWESOME!')); // Output: false
```

The `endsWith()` method is case-sensitive, so 'awesome!' and 'AWESOME!' are treated as different strings.

### Common Use Cases:

1. **File Extension Validation**: Check if a file has a specific extension.

```javascript
function isImageFile(filename) {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
  return imageExtensions.some(ext => filename.toLowerCase().endsWith(ext));
}

console.log(isImageFile('vacation.jpg')); // Output: true
console.log(isImageFile('document.pdf')); // Output: false
```

2. **URL Validation**: Verify if a URL ends with a specific domain or path.

```javascript
function isSecureGoogleUrl(url) {
  return url.toLowerCase().endsWith('google.com') && url.startsWith('https://');
}

console.log(isSecureGoogleUrl('https://www.google.com')); // Output: true
console.log(isSecureGoogleUrl('http://www.google.com')); // Output: false
```

3. **String Formatting Validation**: Check if text follows a specific format or ends with expected characters.

```javascript
function endsWithPunctuation(text) {
  const punctuation = ['.', '!', '?'];
  return punctuation.some(p => text.endsWith(p));
}

console.log(endsWithPunctuation('Hello world!')); // Output: true
console.log(endsWithPunctuation('Hello world')); // Output: false
```

By using the `String.endsWith()` method, you can easily check if a string ends with specific characters, which is particularly useful for validating file types, URL formats, and ensuring proper string formatting in JavaScript applications. 