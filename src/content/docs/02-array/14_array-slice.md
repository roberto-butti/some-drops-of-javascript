---
title: 'Extracting Part of an Array'
sidebar:
  label: Extracting Array
---

## Extracting part of an Array: `slice()`

The `slice()` method in JavaScript extracts a section of an array and returns it as a new array without modifying the original array. This method is helpful when working with a portion of an array without affecting the original one.

The `slice()` function takes two arguments: the start index (inclusive) and the end index (exclusive). The range defined by these indices is used to select elements from the array.

```js
//Syntax
slice(start)
slice(start, end)

`start`: The index at which to start extracting elements (inclusive). If not provided, `slice()` starts from index `0`.
`end`: (Optional) The index at which to stop extracting elements (exclusive). If not provided, `slice()` extracts up to the end of the array.
```

### Examples

_Example 1_, using `slice()` to extract a subarray:

```js
const animals = ['dog', 'cat', 'elephant', 'giraffe', 'lion']

const subArray = animals.slice(1, 4)
console.log(subArray) // Output: ['cat', 'elephant', 'giraffe']
```

In this example:

- The start index is `1` (which is "cat"), and the end index is `4` (which is "lion", but since the end index is exclusive, it's not included).
- The extracted subarray includes the elements from index `1` to `3`.

_Example 2_, using `slice()` with only the start index:

```js
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry']

const subArrayFromIndex = fruits.slice(2)
console.log(subArrayFromIndex) // Output: ['cherry', 'date', 'elderberry']
```

- In this case, by providing only the start index (2), `slice()` extracts all elements from index 2 to the end of the array.

_Example 3_, using `slice()` with negative indices:

```js
const colors = ['red', 'blue', 'green', 'yellow', 'purple']

const lastTwo = colors.slice(-2)
console.log(lastTwo) // Output: ['yellow', 'purple']
```

- Negative indices can be used with `slice()`. A negative start index counts from the end of the array, so `-2` refers to the second-to-last element, and the extraction continues to the end.

### Notes

- Non-destructive: The `slice()` method does not modify the original array.
- Empty array: If the start index is greater than or equal to the array length, or if the start index is greater than the end index, `slice()` returns an empty array.
- Omitting arguments: If both start and end are omitted, `slice()` returns a shallow copy of the entire array.
- The `slice()` method returns a shallow copy of a portion of an array into a new array object.
- The `slice()` method can take no arguments: the start index is 0 and the end index is the length of the array.
