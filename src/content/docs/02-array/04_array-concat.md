---
title: "Concatenate two (or more) arrays: `concat()`"
sidebar:
  label: Concatenating arrays
---

## Concatenate two (or more) arrays: `concat()`

You can concatenate (append) two or more arrays with the `concat()` method.

```javascript
const array1 = ['a', 'b', 'c']
const array2 = ['d', 'e', 'f']
console.dir(array1.concat(array2)) // ['a', 'b', 'c', 'd', 'e', 'f']
```

you can concatenate more arrays:

```javascript
const array1 = ['a', 'b', 'c']
const array2 = ['d', 'e', 'f']
const array3 = ['g', 'h']
console.dir(array1.concat(array2, array3))
console.dir([].concat(array1, array2, array3))
```