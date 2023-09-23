---
title: "Remove duplicate values in an array via `Set()`"
sidebar:
  label: Removing duplicates
---

## Remove duplicate values in an array via `Set()`

If you want to remove duplicates from an array there is no specific array method for removing duplicate elements but you can achieve this using destructuring, the `Set()` function and recreating the array.
It means that the original array will not change.
```js
const array = ['a', 'b', 'c', 'b', 'd', 'e', 'a']
const unique = [...new Set(array)]
// [ 'a', 'b', 'c', 'd', 'e' ]
```
