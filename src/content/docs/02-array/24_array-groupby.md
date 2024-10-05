---
title: 'Array groupBy'
description: 'Groups elements of an array based on a function, returning an object'
sidebar:
  label: Array groupBy
---

# array.groupBy()

## Introduction
The `array.groupBy()` method is used to group elements of an array based on a given function. It returns an object where the keys are the result of the grouping function, and the values are arrays containing the elements that correspond to each key.

## Syntax
```javascript
array.groupBy(callbackFn)
```

### Parameters
- `callbackFn`: A function that accepts up to three arguments. The `groupBy()` method calls the `callbackFn` function once for each element in the array.

### Return value
An object where each key is the result of the `callbackFn` function, and the corresponding value is an array of elements from the original array that produced that result.

## Description
The `groupBy()` method executes the provided `callbackFn` function once for each element in the array. It then groups the array elements according to the returned values from the `callbackFn`.

## Examples
```javascript
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];

const result = inventory.groupBy(({ type }) => type);

console.log(result);
// {
//   vegetables: [
//     { name: "asparagus", type: "vegetables", quantity: 5 },
//   ],
//   fruit: [
//     { name: "bananas", type: "fruit", quantity: 0 },
//     { name: "cherries", type: "fruit", quantity: 5 }
//   ],
//   meat: [
//     { name: "goat", type: "meat", quantity: 23 },
//     { name: "fish", type: "meat", quantity: 22 }
//   ]
// }
```

## Notes
- The `groupBy()` method is a relatively new addition to JavaScript and may not be supported in all environments. Check for compatibility before using it in production.
- If you need to support older environments, you can achieve similar functionality using `reduce()` or other array methods.

## See also
- [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [Object.groupBy()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy)