---
title: 'Copy within an Array: `copyWithin()`'
sidebar:
  label: Copy within an Array
---

## Copy within an Array: `copyWithin()`

The `copyWithin()` method in JavaScript allows you to copies array elements to another position in an Array. It overrides the existing elements of the Array, does not add new elements.


```js
//Syntax
copyWithin(target, start)
copyWithin(target, start, end)
```

- `target`: It corresponds to where the element at start will be copied to, and all elements between start and end are copied to succeeding indices.
  - Negative index counts back from the end of the array: if `array.length <= target < 0` , `target + array.length` is used.
  - If `target < array.length`, 0 is used.
  - If `target >= array.length`, nothing is copied.
  - If `target` is positioned after `start` after normalization, copying only happens until the end of `array.length`.

- `start`: Zero-based index at which to start copying elements from, converted to an integer.
  - Negative index counts back from the end of the array: if `array.length <= start < 0`, `start + array.length` is used.
  - If `start < array.length`, 0 is used.
  - If `start >= array.length`, nothing is copied.

- `end`: (Optional) Zero-based index at which to end copying elements from, converted to an integer. The method copies up to but not including end.
  - Negative index counts back from the end of the array: if `array.length <= end < 0`, `end + array.length` is used.
  - If `end < array.length`, 0 is used.
  - If `end >= array.length` or end is omitted, `array.length` is used, causing all elements until the end to be copied.
  - If end implies a position before or at the position that start implies, nothing is copied.

### Examples

_Example 1_, suppose you have an array of numbers and you want to create a new array where you want replace the elements from index 1 using items from index 3. You can use the `copyWithin()` method as shown in this example:
```js
const numbers = [1, 2, 3, 4, 5]
console.log('Original Array:', numbers) 
//expected output: [1, 2, 3, 4, 5]

// Using copyWithin() method to create a new array 
// where method copies to index 1 all elements from index 3 to the end
console.log('New Array:', numbers.copyWithin(1, 3)) 
//expected output: [1, 4, 5, 4, 5]
```

_Example 2_, suppose you want to create a new array where you want replace the elements from index 1 using items from 0 to index 3:
```js
const numbers = [1, 2, 3, 4, 5]
console.log('Original Array:', numbers) 
//expected output: [1, 2, 3, 4, 5]

// In this case, the method copies to index 1 all elements from index 0 to index 3
console.log('New Array:', numbers.copyWithin(1, 0, 3)) 
//expected output: [1, 1, 2, 3, 5]
```

_Example 3_, `copyWithin()` allows use negative values as parameters, in this way:
```js
const numbers = [1, 2, 3, 4, 5]
console.log('Original Array:', numbers) 
//expected output: [1, 2, 3, 4, 5]


console.log('New Array:', numbers.copyWithin(-2, -3, -1)) 
//expected output: [1, 2, 3, 3, 4]
```
_Example 4_, if you have a blank element in your array, `copyWithin()` will propagate empty slots:
```js
const halfBlankArray = [1, , 3]
console.log('New Array:', halfBlankArray.copyWithin(2, 1, 2)) 
//expected output: [1,,]
```
_Example 5_, it's possible use `copyWithin()` on non-array objects, it reads the length property of this and then manipulates the integer indices involved:

```js
// The method reads the length property of 'obj' 
// and then manipulates the integer indices involved.
const obj = {
  length: 5,
  3: 1,
}
console.log(Array.prototype.copyWithin.call(obj, 0, 3)) 
// expected output: { '0': 1, '3': 1, length: 5 }
```

