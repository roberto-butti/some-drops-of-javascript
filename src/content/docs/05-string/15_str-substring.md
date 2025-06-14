---
title: "Extracting parts of a string"
sidebar:
  label: String substring
---

## String substring: `String.substring()`

The **substring()** method in JavaScript extracts characters from a string between two specified indices and returns a new string. This method extracts characters from the start index up to (but not including) the end index.

Syntax:
```javascript
string.substring(startIndex, endIndex)
```

### Parameters:

1. **startIndex**: The position where extraction begins. If startIndex is negative, it is treated as 0.
2. **endIndex (optional)**: The position where extraction ends (up to but not including the character at this index). If omitted, extraction continues to the end of the string.

### Return Value:

The `substring()` method returns a new string containing the extracted characters. It does not modify the original string.

### Examples:

#### Basic Usage:

```javascript
const text = 'JavaScript';
console.log(text.substring(0, 4)); // Output: "Java"
console.log(text.substring(4)); // Output: "Script"
```

In this example, the first call extracts characters from index 0 to (but not including) index 4, resulting in "Java". The second call extracts characters from index 4 to the end of the string, resulting in "Script".

#### Handling Out-of-Range Indices:

```javascript
const text = 'Hello';
console.log(text.substring(-3, 2)); // Output: "He"
console.log(text.substring(2, 10)); // Output: "llo"
```

If startIndex is negative, it is treated as 0. If endIndex is greater than the string's length, extraction continues to the end of the string.

#### Swapping Parameters:

```javascript
const text = 'JavaScript';
console.log(text.substring(4, 0)); // Output: "Java"
```

If startIndex is greater than endIndex, the `substring()` method swaps the two arguments. This is different from the `slice()` method, which returns an empty string in such cases.

### Comparison with slice():

The `substring()` and `slice()` methods are similar, but they handle negative indices differently:

```javascript
const text = 'JavaScript';
console.log(text.substring(-3)); // Output: "JavaScript" (treats -3 as 0)
console.log(text.slice(-3)); // Output: "ipt" (counts from the end)
```

The `substring()` method treats negative indices as 0, while the `slice()` method counts from the end of the string.

### Common Use Cases:

1. **Extracting a Portion of Text**:

```javascript
function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
}

const longText = 'This is a very long text that needs to be truncated';
console.log(truncateText(longText, 20)); // Output: "This is a very long..."
```

2. **Parsing URL Components**:

```javascript
function getDomainFromUrl(url) {
  // Remove protocol
  let domain = url;
  if (url.indexOf('://') > -1) {
    domain = url.substring(url.indexOf('://') + 3);
  }
  
  // Remove path
  if (domain.indexOf('/') > -1) {
    domain = domain.substring(0, domain.indexOf('/'));
  }
  
  return domain;
}

console.log(getDomainFromUrl('https://example.com/path')); // Output: "example.com"
```

3. **Removing Specific Characters**:

```javascript
function removeFirstAndLastChar(text) {
  return text.substring(1, text.length - 1);
}

console.log(removeFirstAndLastChar('"quoted"')); // Output: "quoted"
```

By using the `String.substring()` method, you can efficiently extract portions of strings, which is a common operation in text processing, data parsing, and user interface development in JavaScript applications. 