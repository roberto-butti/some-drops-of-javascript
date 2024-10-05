---
title: 'Copy within an Array: `copyWithin()`'
sidebar:
  label: Copy within an Array
---

## Copy within an array: `copyWithin()`

The `copyWithin()` method in JavaScript shallow copies part of an array to another location within the same array, without modifying the array’s length.

It allows for in-place modification of the array, making it a useful function for rearranging or manipulating data in arrays without creating new arrays. This method is efficient and destructive, altering the original array.

It accepts up to three parameters, but only the first parameter is mandatory. Here's how each parameter works:

```javascript
array.copyWithin(target, start, end)
```

1. `target` (required):

  This is the only mandatory parameter. It specifies the index where the copying will begin (the destination index). Elements from another part of the array will be copied here. If the target is negative, it will be counted from the end of the array.

2. `start` (optional):
    This is the index from which the copying will start (the source index). If omitted, the copying will start from the beginning of the array (index 0). If negative, it counts from the end of the array.

3. `end` (optional):
    This specifies the index where to stop copying (non-inclusive). If omitted, the copying continues until the end of the array. If negative, it also counts from the end of the array.

### Example: basic syntax with one parameter
When using one parameter with `copyWithin()`, this parameter indicates the target position from which the copied elements will be placed within the same array.

```javascript
const arr = [1, 2, 3, 4, 5, 6];
arr.copyWithin(3)
// arr is [ 1, 2, 3, 1, 2, 3 ]
```

In this case, the target parameter is the index (remember arrays are 0 index base), where the copied elements will start to be placed. The elements will be copied from index 0 (the start of the array) and moved to `target`.

Another example:

```javascript
const arr2 = [1, 2, 3, 4, 5, 6, 7];
arr2.copyWithin(3)
// arr2 is [ 1, 2, 3, 1, 2, 3, 4 ]
```

The initial part of the array is taken and copied from the `target` position.

An additional example, take a look at how are filled the 0s values:

```javascript
const arr3 = [1, 2, 3, 4, 0, 0, 0];
// the index 3         ^
arr3.copyWithin(3)
```
From the index 3 to the end of the array, there are 4 elements.
So `copyWithin` takes  the first four elements of the array and copies them from the  element at index 3


### Example: basic syntax with two parameters, `target` and `start`

Suppose you have an array of numbers, and you want to create a new array where you want to replace the elements from index 1 using items from index 3. You can use the `copyWithin()` method as shown in this example:
```js
const numbers = [1, 2, 3, 4, 5]
console.log('Original Array:', numbers) 
//expected output: [1, 2, 3, 4, 5]

// Using copyWithin() method to create a new array 
// where method copies to index 1 all elements from index 3 to the end
console.log('New Array:', numbers.copyWithin(1, 3)) 
//expected output: [1, 4, 5, 4, 5]
```

### Example about basic syntax with three  parameters: `target`, `start`, and `end`

Another example, suppose you want to create a new array where you want to replace the elements from index 1 using items from 0 to index 3:
```js
const numbers = [1, 2, 3, 4, 5]
console.log('Original Array:', numbers) 
//expected output: [1, 2, 3, 4, 5]

// In this case, the method copies to index 1 all elements from index 0 to index 3
console.log('New Array:', numbers.copyWithin(1, 0, 3)) 
//expected output: [1, 1, 2, 3, 5]
```

_Example 3_, `copyWithin()` allows the use negative values as parameters in this way:
```js
const numbers = [1, 2, 3, 4, 5]
console.log('Original Array:', numbers) 
//expected output: [1, 2, 3, 4, 5]


console.log('New Array:', numbers.copyWithin(-2, -3, -1)) 
//expected output: [1, 2, 3, 3, 4]
```

### Negative parameters in `copyWithin()`

Using a negative `target` means copying elements starting from the beginning (`start` defaults to 0 if not specified) and pasting them starting from a position counted backward from the end.

```javascript
const arr = [10, 20, 30, 40, 50];
arr.copyWithin(-2); // Copies elements from index 0 and pastes them starting at index -2
console.log(arr); // Output: [10, 20, 30, 10, 20]
```

Explanation:

- `target` equals to ` -2` refers to the second-to-last element of the array (index 3). The function copies from the beginning ([10, 20, 30]) and pastes it starting at the third-to-last position, replacing the last two elements with [10, 20].

You can specify a negative `start` to begin copying from an index counted backward from the end.

```javascript
const arr = [10, 20, 30, 40, 50];
arr.copyWithin(0, -3); // Starts copying from index -3 (which is 30) and pastes at index 0
console.log(arr); // Output: [30, 40, 50, 40, 50]
```

Explanation:

- `start` equals to `-3` refers to the third-to-last element (index 2), which is 30.
The function copies from 30 to the end of the array ([30, 40, 50]) and pastes it at index 0, replacing the first three elements.

You can use a negative `end` to stop copying at an index counted backward from the end of the array. Note that `end` is non-inclusive, meaning it doesn’t include the element at that index.

```javascript
const arr = [10, 20, 30, 40, 50];
arr.copyWithin(1, -4, -1); // Copies from index -4 (20) to -1 (50, non-inclusive) and pastes at index 1
console.log(arr); // Output: [10, 20, 30, 40, 50]
```

Explanation:

- `start` equals to `-4` refers to the fourth-to-last element (index 1), which is 20.
- `end` equals to `-1` refers to the last element (index 4), but it's non-inclusive, so copying stops just before 50.
- The function copies from 20 to 40 ([20, 30, 40]) and pastes it starting at index 1, but in this case, no values changed as it copied into the same positions.

### Combined example: negative `target`, `start`, and `end`
Let's see an example that uses all three parameters as negative values:

```javascript
const arr = ['a', 'b', 'c', 'd', 'e'];
arr.copyWithin(-3, -4, -2); // Copies from index -4 (b) to -2 (d, non-inclusive) and pastes at index -3
console.log(arr); // Output: ['a', 'b', 'b', 'c', 'e']
```

Explanation:

- `target` equals to `-3`: This means copying starts at the third-to-last element (index 2).
- `start` equals to `-4`: This refers to the fourth-to-last element (b at index 1).
- `end` equals to `-2`: This refers to the second-to-last element (d at index 3), but it's non-inclusive, so copying stops before d.

So, elements from `start` = -4 ('b') to `end` = -2 ('c') are copied into positions starting at index -3 (the third-to-last position), resulting in ['a', 'b', 'b', 'c', 'e'].

### Important considerations

- **In-place modification**: `copyWithin()` modifies the original array. To keep the original array intact, clone it before using this method.
- **Shallow copy**: `copyWithin()` performs a shallow copy. If the array contains objects, it will only copy references to them, not the objects themselves.
- **Usefulness in algorithms**: This method can be particularly useful in algorithms that require in-place modifications to improve efficiency, such as avoiding creating new arrays when working with large datasets.
