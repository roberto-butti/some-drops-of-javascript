---
title: 'Finding the Last Index'
description: 'returns the last index of the element in the array that satisfies the provided testing function'
sidebar:
  label: Finding the Last Index
---

## Finding the index of the last element that passes a test: `findLastIndex()`

The `findLastIndex()` method of Array instances iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

The `findLastIndex()` function accepts a single argument: a callback function that tests each element in the array. This callback function can be customized to define the condition that elements must meet to be considered.

```js
//Syntax
findLastIndex(callbackFn(currentVal, index, arr))
findLastIndex(callbackFn(currentVal, index, arr), thisArg)
```

- `callbackFn()`: A function to execute for each element in the array. It should return a truthy value to indicate a matching element has been found, and a falsy value otherwise. The function is called with the following arguments: currentVal, index, and arr.
- `currentVal`: (Required) The current element being processed in the array.
- `index`: (Optional) The index of the current element being processed in the array.
- `arr`: (Optional) The array findLastIndex() was called upon.
`thisArg`: (Optional) The value to use as this when executing the callback function. By default, it is undefined.

### Examples

_Example 1_, using `findLastIndex()` to get the index of the last element that passes the test:

```js
const numbers = [5, 12, 8, 130, 44];

let lastIndex = numbers.findLastIndex(checkLargeNumber);

function checkLargeNumber(num) {
  return num > 10;
}
```

In this example:

- A function checkLargeNumber() is passed as a callback to the findLastIndex() function.
- The findLastIndex() function will execute checkLargeNumber() for each element in the numbers array, starting from the end.
- The condition num > 10 holds true for the element 44 at index 4, so findLastIndex() returns 4.

_Example 2_, `findLastIndex()` returns -1 when no element matches the condition:

```js
const numbers = [1, 2, 3, 4, 5];

let lastIndex = numbers.findLastIndex(checkLargeNumber);

function checkLargeNumber(num) {
  return num > 10;
}
```

- In this case, none of the elements in numbers satisfy the num > 10 condition, so the findLastIndex() function returns -1.

### Notes

- Executes the function on each array element, starting from the end of the array.
- Returns the index (position) of the last element that passes the test.
- Returns -1 if no match is found.
- Does not execute the function for empty array elements.
- Does not change the original array.