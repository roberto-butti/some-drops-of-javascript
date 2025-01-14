---
title: 'Flattening an Array'
description: 'Flattening an Array with the flat() method'
sidebar:
  label: Flattening an Array
---

## Flattening an Array: `flat()`

The `flat()` method in Javascript is used to flatten an array, meaning it merges nested sub-arrays into a single array up to a specified depth. This method is helpful when working with multidimentional arrays and merging arrays with nested elements.

The `flat()` method takes `depth` as an optional argument. By default, the depth is set to 1.

The option argument `depth` is the depth level specifying how deep a nested array structure should be flattened. Defaults to 1.


### Examples

_Example 1_, using `flat()` to flatten an array:

```javascript
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat()); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
```

In this example, the flat by default takes the depth as 1 and flattens the array to one level deep.

_Example 2_, using `flat()` with a depth argument:

```javascript
const arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(arr2.flat()); // Output: [1, 2, 3, 4, [5, 6]]
console.log(arr2.flat(2)); // Output: [1, 2, 3, 4, 5, 6]
```

In this example, using the flat method without the depth argument flattens the array to only one level deep. Calling `flat()` without specifying a depth will flatten only the first level of nested arrays. This means it unpacks [3, 4] from the array, but leaves [5, 6] untouched, as it's inside another nested array. 

Hence the result [1, 2, 3, 4, [5, 6]] – where [5, 6] is still nested.

But with the depth argument set to 2, `flat(2)` will flatten the array up to two levels deep. This means it will flatten both the first level ([3, 4]) and the second level ([5, 6]) of nesting, resulting in a completely flattened array in this case.

Hence the result [1, 2, 3, 4, 5, 6] – where all elements are at the top level.

_Example 3_, using `flat()` in an array which has empty slots (Sparse Array):

```javascript
const arr5 = [1, 2, , 4, 5];
console.log(arr5.flat()); // Output: [1, 2, 4, 5]
```

Using `flat()` method on a sparse array not only flattens nested arrays but also removes empty slots from sparse arrays. This behavior is particularly useful when you want to ensure that your array contains only defined values.

### Notes

- Setting the depth argument to `Infinity`, allows you to completely flatten an array. It ensures that no matter how deeply nested the elements are, they will all be accessible at the top level of the resulting array.
