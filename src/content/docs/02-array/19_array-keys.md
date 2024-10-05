---
title: 'Iterating over Array Indexes'
sidebar:
  label: Iterating over Array Indexes
---

## Iterating over Array Indexes with `keys()`

In JavaScript, the `keys()` method allows you to create an iterator object that contains the indexes (or keys) of the elements in an array.

The `keys()` method does not change the original array.

### Examples

_Example 1_, using `keys()` to iterate over an array:

```js
const fruit = ['watermelon', 'pineapple', 'pear', 'mango']
const fruitKeys = fruit.keys()

for (let key of fruitKeys) {
  console.log(key)
}

// Output:
// 0
// 1
// 2
// 3
```

_Example 2_, using `keys()` with a sparse array:

If an array has "holes" (i.e. missing elements), the `keys()` method still iterates over all possible indexes.

```js
const animal = ['dog', , 'cat']

for (let key of animal.keys()) {
  console.log(`Animal at index ${key} is ${animal[key]}`)
}

// Output:
// Animal at index 0 is dog
// Animal at index 1 is undefined
// Animal at index 2 is cat
```