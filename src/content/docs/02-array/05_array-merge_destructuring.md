---
title: "Concat arrays via destructuring"
sidebar:
  label: Concatenating arrays via destructuring
---

## Concat arrays via destructuring
For concatenating or merging two or more arrays, you can use the destructuring technique.

With this technique essentially you are going to unpack the arrays into a list of distinct variables, and use this list to recreate a new array with square brackets.

```js
const array1 = ['a', 'b', 'c']
const array2 = ['d', 'e', 'f']
console.dir([...array1, ...array2])
// [ 'a', 'b', 'c', 'd', 'e', 'f' ]
```

You can use this technique with more than 2 arrays:
```js
const array1 = ['a', 'b', 'c']
const array2 = ['d', 'e', 'f']
const array3 = ['g', 'h']
console.dir([...array1, ...array2, ...array3])
// [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ]
```
The order you are using the `[...array1, ...array2, ...array3]` is important because determines the order of the items for the new array
```js
const array1 = ['a', 'b', 'c']
const array2 = ['d', 'e', 'f']
const array3 = ['g', 'h']
console.dir([...array3, ...array2, ...array1])
// [ 'g', 'h', 'd', 'e', 'f', 'a', 'b', 'c' ]
```
