---
title: "Create a string from an array: `join()`"
sidebar:
  label: From array to string
---

## Create a string from an array: `join()`

If you want to generate a string, joining all the array elements, you can use the `join()` method. By default, the character is used as separator. If you want to use a specific separator you can call the join('-') method with the separator needed as the first argument.

```javascript
const elements = ['kiwi', 'strawberry', 'lemon']

console.log(elements.join())
// expected output: "kiwi,strawberry,lemon"
console.log(elements.join('-'))
// expected output: "kiwi-strawberry-lemon"
```