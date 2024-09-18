---
title: 'Adding, removing, and replacing elements in an array'
sidebar:
  label: Modifying Array
---

## Modifying an Array: `splice()`

### Introduction:

The `splice()` method is a versatile array method in JavaScript used to modify an array by adding, removing, or replacing elements. It directly changes the original array and returns an array of the removed elements.

The `splice()` method takes three main arguments: the start index, the number of elements to remove (_optional_), and the elements to add (_optional_).

By specifying a start index, you can define where the changes should occur in the array. The method can then remove a specified number of elements, add new elements, or both, depending on the parameters provided. This makes `splice()` a powerful tool for modifying arrays in place.

```js
//Syntax
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1, item2, ...)
```

- `start`: The index at which to start modifying the array.

- `deleteCount`: (Optional) Number of elements to remove from the array.

- `item1, item2`: (Optional) Elements to add starting from the _start_ index.

### Adding Elements:

The `splice()` method can be used to add new elements to an array. By setting the deleteCount to 0, new elements can be inserted at the specified start index.

Let's use the `splice()` method to modify an array by adding elements:

```js
const fruits = ['Apple', 'Banana', 'Cherry', 'Date']

// Adding elements
fruits.splice(1, 0, 'Blueberry', 'Coconut') // Adds two elements at index 1
console.log('Array after adding:', fruits) // Output: ['Apple', 'Blueberry', 'Coconut', 'Banana', 'Cherry', 'Date']
```

### Removing Elements:

The `splice()` method can also be used to remove elements from an array. By specifying the start index and deleteCount, a specific number of elements can be removed starting at a given position.

Let's use the `splice()` method to modify an array by removing elements:

```js
const fruits = ['Apple', 'Banana', 'Cherry', 'Date']

// Removing elements
const removedFruits = fruits.splice(1, 2) // Removes 2 elements starting from index 1
console.log('Modified array:', fruits) // Output: ['Apple', 'Date']
console.log('Removed elements:', removedFruits) // Output: ['Banana', 'Cherry']
```

### Replacing Elements:

The `splice()` method can be used to replace existing elements by removing some and adding others at the same index.

Let's use the `splice()` method to modify an array by replacing elements:

```js
const fruits = ['Apple', 'Blueberry', 'Coconut', 'Date']

// Replacing elements
fruits.splice(2, 1, 'Dragonfruit') // Replaces 1 element at index 2
console.log('Array after replacing:', fruits) // Output: ['Apple', 'Blueberry', 'Dragonfruit', 'Date']
```
### Example:

Let's use the `splice()` method to swap elements in an array:

```js
const arr = ['a', 'b', 'c', 'd']

function swap(arr, index1, index2) {
  const [elem1] = arr.splice(index1, 1)
  const [elem2] = arr.splice(index2 - 1, 1) // '-1' adjusts for the earlier removal of 'elem1'
  arr.splice(index1, 0, elem2)
  arr.splice(index2, 0, elem1)
}
swap(arr, 1, 3)
console.log('Swapped array:', arr) // Output: ['a', 'd', 'c', 'b']
```
