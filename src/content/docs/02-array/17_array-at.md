---
title: 'Access an element at a specific index with `at()`'
sidebar:
  label: Accessing a specific element
---

## Access an element at a specific index with `at()`

The `at()` method in Javascript allows you to access an element of an array at a specific index.

The `at()` method takes one argument, which is the index of the element that you want to retrieve. You can use positive or negative integers. Positive integers access elements from the start of the array, while negative integers count from the end.

### Examples

_Example 1_, using `at()` to access an element counting from the start of the array:

```js
const fruit = ["banana", "mango", "orange", "apple"]

console.log(fruit.at(0)) // Output: "banana"


const item = fruit.at(2)

console.log(item) // Output: "orange"
```
In this example we used positive integers to access elements, counting from the start of the array. When we used `0` as the index, the first element was returned. 

_Example 2_, using `at()` to access an element counting back from the end of the array:

```js
const fruit = ["banana", "mango", "orange", "apple"]

console.log(fruit.at(-1)) // Output: "apple" 


const item = fruit.at(-3)

console.log(item) // Output: "mango"
```

In this example we used negative integers to access elements, counting back from the end of the array. When we used `-1` as the index, the last element was returned. 

### Notes

- When accessing an element with a negative index (for example `-2`), the `at()` function is accessing `index + array.length`.
- If the index is out of range, it will return `undefined`.
