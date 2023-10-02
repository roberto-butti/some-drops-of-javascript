---
title: 'Mapping an Array: `map()`'
sidebar:
  label: Mapping Array
---

## Mapping an Array: `map()`

The `map()` method in JavaScript allows you to create a new array by applying a function to each element of an existing array. It iterates through the elements of the original array, performs a specified operation on each element, and returns a new array with the results.

### Example

Suppose you have an array of numbers and you want to create a new array where each number is doubled. You can use the `map()` method as shown in this example:

```js
const numbers = [1, 2, 3, 4, 5]

// Using map() method to create a new array by doubling each number
const doubledNumbers = numbers.map((number) => number * 2)

console.log('Original Array:', numbers)
console.log('Doubled Array:', doubledNumbers)
```
