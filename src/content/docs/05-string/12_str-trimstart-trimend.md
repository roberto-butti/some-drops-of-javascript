---
title: 'Trimming Whitespace from the Start and End of a String'
description: 'Removes whitespace from the beginning or end of a string without altering the original content'
sidebar:
  label: Trimming Whitespace
---

## Removing Whitespace from the Start: `trimStart()`

The `trimStart()` method of String instances removes whitespace from the beginning (leading whitespace) of a string. This method returns a new string without modifying the original string.


```js
//Syntax
trimStart()
```

- The method does not modify the original string but returns a new string with trailing whitespace removed.

### Example : 

Using `trimStart()` to remove leading whitespace:

```js
const str = "   Hello, World!   ";

let trimmedStr = str.trimStart();

console.log(trimmedStr); 
// "Hello, World!   "

```

In this example:

- The original string has leading whitespace before the text `“Hello, World!”`.
- The `trimStart()` function removes this leading whitespace, leaving the rest of the string intact.

## Removing Whitespace from the End: `trimEnd()`

The `trimEnd()` method of String instances removes whitespace from the end (trailing whitespace) of a string. This method returns a new string without modifying the original string.


```js
//Syntax
trimEnd()
```

- The method does not modify the original string but returns a new string with trailing whitespace removed.

### Example: 

Using `trimEnd()` to remove trailing whitespace:


```js
const str = "   Hello, World!   ";

let trimmedStr = str.trimEnd();

console.log(trimmedStr); 
// "   Hello, World!"

```

In this example:

- The original string has trailing whitespace after the text `“Hello, World!”`.
- The `trimEnd()` function removes this trailing whitespace, leaving the rest of the string intact.




### Notes

- The `trimStart()` method removes whitespace only from the beginning of the string.
- The `trimEnd()` method removes whitespace only from the end of the string.
- Neither method changes the original string; they return a new string instead.
- `trimLeft()` and `trimRight()` are aliases for `trimStart()` and `trimEnd()` respectively.