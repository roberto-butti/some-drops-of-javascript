---
title: "Testing all elements: `every()`"
---

## Testing all elements: `every()`

If you have an array and you want to check if all the elements satisfy a certain condition, you can use `every()` method on Array.
For example, if you want to check that all the array elements are greater than 25, you can use this example:

```js
// the array
const array = [32, 30, 39, 29, 100, 43]

console.log(
  array.every(
    (currentValue) => currentValue > 25
  )
)


```