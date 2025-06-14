---
title: "Finding the last occurrence of a substring"
sidebar:
  label: String lastIndexOf
---

## String lastIndexOf: `String.lastIndexOf()`

The **lastIndexOf()** method in JavaScript returns the index of the last occurrence of a specified value in a string. It searches the string from the end to the beginning and returns the position where the specified value is found. If the value is not found, it returns -1.

Syntax:
```javascript
string.lastIndexOf(searchValue, fromIndex)
```

### Parameters:

1. **searchValue**: The string to search for.
2. **fromIndex (optional)**: The position in the string at which to begin searching backward. If omitted, the default is the length of the string, which means the entire string is searched.

### Return Value:

The `lastIndexOf()` method returns the index of the last occurrence of the specified value in the string, searching backward from the specified position. If the value is not found, it returns -1.

### Examples:

#### Basic Usage:

```javascript
const text = 'JavaScript is amazing. JavaScript is fun.';
const lastIndex = text.lastIndexOf('JavaScript');
console.log(lastIndex); // Output: 25
```

In this example, the `lastIndexOf()` method finds the last occurrence of 'JavaScript' in the string, which starts at index 25.

#### Using fromIndex Parameter:

```javascript
const text = 'JavaScript is amazing. JavaScript is fun.';
const lastIndex = text.lastIndexOf('JavaScript', 20);
console.log(lastIndex); // Output: 0
```

By specifying a `fromIndex` of 20, the search starts from position 20 and goes backward. The first occurrence of 'JavaScript' (starting from index 0) is found.

#### Searching for a Character:

```javascript
const text = 'Hello, world!';
const lastIndex = text.lastIndexOf('o');
console.log(lastIndex); // Output: 8
```

The last occurrence of the character 'o' is at index 8.

#### Not Found Case:

```javascript
const text = 'Hello, world!';
const lastIndex = text.lastIndexOf('z');
console.log(lastIndex); // Output: -1
```

Since the character 'z' is not in the string, the method returns -1.

### Common Use Cases:

1. **File Extension Extraction**:

```javascript
function getFileExtension(filename) {
  const dotIndex = filename.lastIndexOf('.');
  return dotIndex === -1 ? '' : filename.substring(dotIndex + 1);
}

console.log(getFileExtension('document.pdf')); // Output: "pdf"
console.log(getFileExtension('image.large.jpg')); // Output: "jpg"
console.log(getFileExtension('noextension')); // Output: ""
```

2. **Finding the Last Word in a Sentence**:

```javascript
function getLastWord(sentence) {
  const lastSpaceIndex = sentence.lastIndexOf(' ');
  return lastSpaceIndex === -1 ? sentence : sentence.substring(lastSpaceIndex + 1);
}

console.log(getLastWord('Hello, world!')); // Output: "world!"
console.log(getLastWord('JavaScript')); // Output: "JavaScript"
```

3. **Checking if a String Ends with a Specific Substring**:

```javascript
function endsWith(str, suffix) {
  const position = str.lastIndexOf(suffix);
  return position !== -1 && position === str.length - suffix.length;
}

console.log(endsWith('Hello, world!', 'world!')); // Output: true
console.log(endsWith('Hello, world!', 'Hello')); // Output: false
```

Note: Modern JavaScript has the built-in `endsWith()` method which is preferred for this use case.

By using the `String.lastIndexOf()` method, you can efficiently locate the last occurrence of a substring within a string, which is particularly useful for parsing file paths, extracting extensions, and performing other string manipulation tasks in JavaScript applications. 