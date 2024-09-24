---
title: 'Flattening and Mapping a Nested Array'
description: 'Flattening and Mapping a Nested Array with the flatMap() method'
sidebar:
  label: Flattening and Mapping a Nested Array
---

## Flattening and Mapping a Nested Array: `flatMap()`

The `flatMap()` method in JavaScript combines the functionality of `map()` and `flat()` into one. It maps each element using a mapping function and then flattens the result into a new array. By default, it flattens the array one level deep, making it useful for dealing with nested arrays while performing a transformation.

The `flatMap()` method does not take a depth argument; it flattens the array by exactly one level.

```Javascript
// Syntax
flatMap(callback(currentValue, index, array), thisArg);

`callback`: A function to execute on each element.
`thisArg`: Value to use as `this` when executing the callback.
```

### Examples
_Example 1_, using `flatMap()` to map and flatten a nested array:
```Javascript
const arr = [[1, 2], [3, 4], [5, 6]];
console.log(arr.flatMap(x => x)); // Output: [1, 2, 3, 4, 5, 6]
```
In this example, the `flatMap()` method is used to flatten each sub-array in arr by one level. The callback simply returns the elements as they are, and flatMap() flattens the resulting nested arrays.

_Example 2_, using `flatMap()` to handle nested arrays and sparse arrays:
```Javascript
const arr3 = [[1, 2], , [3, 4], [5, 6]];
console.log(arr3.flatMap(x => x)); // Output: [1, 2, 3, 4, 5, 6]
```
In this example, `flatMap()` flattens the nested arrays while automatically removing empty slots from sparse arrays.

_Example 3_, using `flatMap()` to concatenate and flatten strings in a nested array:
```Javascript
const arr4 = [["hello", "world"], ["foo", "bar"]];
console.log(arr4.flatMap(x => x.join(' ')));  // Output: ["hello world", "foo bar"]
```
Here, each nested array is joined into a single string using `join()`, and `flatMap()` flattens the resulting array of strings into a single-level array.

### Notes
- The `flatMap()` method is a combination of `map()` followed by `flat(1)`.
- It's important to note that `flatMap()` only flattens by one level. If you need to flatten more deeply nested arrays, you should use `map()` followed by `flat()` with the required depth.