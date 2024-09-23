---
title: 'Finding the Index'
description: 'Finding the index of the first element that passes a test'
sidebar:
  label: Finding the Index
---

## Finding the index of the first element that passes a test: `findIndex()`

The `findIndex()` method in JavaScript searches through an array and returns the index of the first element that satisfies a provided testing function. If no such element is found, it returns -1. This method is useful for locating an element based on a specific condition without altering the original array.

The `findIndex()` function accepts a single argument: a callback function that tests each element in the array. This callback function can be customized to define the condition that the elements must meet to be considered.


```js
//Syntax
findIndex(callbackFn(currentVal, index, arr))
findIndex(callbackFn(currentVal, index, arr), thisArg)
```

- `callbackFn()`: A function to execute for each element in the array. It should return a truthy value to indicate a matching element has been found, and a falsy value otherwise. The function is called with the following arguments: currentVal, index and arr
- `currentVal`: (Required) The current element being processed in the array.
- `index`: (Optional) The index of the current element being processed in the array.
- `arr`: (Optional) The array findIndex() was called upon.
- `thisArg`: (Optional) The value to use as `this` when executing the callback function. By default it is undefined.


### Examples

_Example 1_, using `findIndex()` to get the index of the first element that passes the test:

```js
const ages = [3, 10, 18, 20];

let index = ages.findIndex(checkAge);

function checkAge(age) {
  return age > 18;
}
```

In this example:

- A function checkAge() is passed as a callback to `findIndex()` function
- `findIndex()` function will execute checkAge() callback function for each element of ages array
- The condition age > 18 holds true for element value 20 at index 3 in ages array, therefore `findIndex()` will return 3

_Example 2_, `findIndex()` returns -1 when no element matches the callback function condition:

```js
const ages = [3, 10, 13, 15];

let index = ages.findIndex(checkAge);

function checkAge(age) {
  return age > 18;
}
```

- In this case, no element of ages satisfies the age > 18 condition so the `findIndex()` function will return -1.


### Notes

- Executes a function on each array element
- Returns the index (position) of the first element that passes the test
- Returns -1 if no match is found
- Does not executes the function for empty array elements
- Does not change the original array