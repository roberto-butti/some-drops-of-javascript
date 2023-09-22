---
title: "Testing at least one element: `some()`"
---

## Testing at least one element: `some()`

If you have an array and you want to check if at least one of the elements satisfies a certain condition, you can use `some()` method on Array.
For example, if you want to check that at least one element of the array is greater than 90, you can use this example:

```js
const array = [32, 30, 39, 29, 100, 43]

console.log(
  array.some(
    (currentValue) => currentValue > 90
  )
)
```