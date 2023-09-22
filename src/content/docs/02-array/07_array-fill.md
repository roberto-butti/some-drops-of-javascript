---
title: "Generate and fill a new array `fill()`"
---

## Generate and fill a new array `fill()`

The `fill()` method sets a specific value to the elements of the array.

If you have an array with some values:

```js
const array = ['a', 'b', 'c', 'b', 'd', 'e', 'a']
```
and you want to replace/fill the elements with the value `0`, you can call `fill()` method on the array, using `0` as a parameter:

```js
array.fill(0)
// [ 0, 0, 0, 0, 0, 0, 0 ]
```

As you can see the `fill()` method changes the content of the original array. The size of the array will be the same as the original one.

The `fill()` method has two more optional parameters about the starting index to apply the changes and the ending index.
For example, if you want to replace values starting with the second element (remember 0 index array):

```js
const array2 = ['a', 'b', 'c', 'b', 'd', 'e', 'a']
array2.fill(
    0, // the value to fill
    1 // the index where to start
)
console.dir(array2)
// [ 'a', 0, 0, 0, 0, 0, 0 ]
```

you can also set the last index to apply the replacement. For example, if you want to replace elements from index 1 (the second element) until index 3 (the third element included):
```js
const array3 = ['a', 'b', 'c', 'b', 'd', 'e', 'a']
array3.fill(
    0, // the value to fill
    1 // the index where to start
    3 // the index where to end
)
console.dir(array3)
// [ 'a', 0, 0, 'b', 'd', 'e', 'a' ]
```

If you want to fill/replace the last element you can use the negative index:

```js
const array4 = ['a', 'b', 'c', 'b', 'd', 'e', 'a']
array4.fill(0, -1) // last element
console.dir(array4)
// [ 'a', 0, 0, 'b', 'd', 'e', 'a' ]
array4.fill(0, -2) // last 2 elements
console.dir(array4)
// [ 'a', 'b', 'c', 'b', 'd', 0, 0 ]
```
