---
title: "Check if the array includes a certain value: `includes()`"
---

## Check if the array includes a certain value: `includes()`

If you want to check if the array includes a specific value, you can use `include()` method. The first mandatory input argument of `include()` method is the value of the element you want to check.

```javascritpt
const elements = ['kiwi', 'strawberry', 'lemon']

console.log(elements.includes('strawberry'))
// Does the array include the 'strawberry'?
// expected output: true
```

If you want to check if the value is included starting from a specific index you can use the second input parameter for setting the index (remember to start from 0 for counting the position).

```javascript
const elements = ['kiwi', 'strawberry', 'lemon']

console.log(elements.includes('strawberry'), 2)
// Does the array starting from index 2, include the 'strawberry'?
// expected output: false
```
