---
title: 'Copy within an Array: `copyWithin()`'
sidebar:
  label: Copy within an Array
---

## Copy within an Array: `copyWithin()`

The `copyWithin()` method in JavaScript allows you to copies array elements to another position in an Array. It overrides the existing elements of the Array, does not add new elements.

### Example

Suppose you have an array of numbers and you want to create a new array where ewhere number 5 is replaced by number 1. You can use the `copyWithin()` method as shown in this example:

```js
const numbers = [1, 2, 3, 4, 5]

// Using copyWithin() method to create a new array where number '5' is replaced by number '1'
// '4' is the index of replaced element and '0' the index of substitute
const copyNumbers = numbers.copyWithin(4,0)

console.log('Original Array:', numbers)
console.log('New Array:', copyNumbers)
```
