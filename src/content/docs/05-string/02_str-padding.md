---
title: "Padding strings"
sidebar:
  label: Padding strings
---

The padding function in JavaScript allows you to add a specified number of characters (spaces or any other defined characters) to the beginning or end of a string, ensuring it reaches a desired length.

## Padding from the start of the string: `String.padStart()`

The padStart() method in JavaScript serves the purpose of extending a string by adding another string to it until it reaches a specified length. This padding operation occurs at the left end of the original string.

Syntax:
```javascript

string.padStart(targetLength, padString)

```

### Parameters:

targetLength: This parameter represents the desired length of the resulting string after the original string has been padded. If the provided value is smaller than the length of the original string, the original string remains unchanged.

padString: This is the string that gets added to the original string for padding. If the padString is longer than what can fit within the targetLength, it will be truncated from the end. By default, a space character (" ") is used as the padding string.

### Return Value:
The method returns the extended string, padded with the specified string, resulting in the desired length.



## Padding from the start of the string: `String.padEnd()`

The padEnd() method in JavaScript serves the purpose of expanding a string by appending another string to it until it reaches a specified length. The padding operation takes place at the right end of the original string.

Syntax:
```javascript

string.padEnd(targetLength, padString)

```
### Parameters:

targetLength: This parameter defines the intended length of the resulting string after the original string has been padded. If the provided value is smaller than the length of the original string, the original string remains unchanged.

padString: This is the string that is added to the original string for padding. If the length of the padString exceeds what can fit within the targetLength, it is truncated.

### Return Value:
The method returns the extended string, padded with the specified string to the desired length.

