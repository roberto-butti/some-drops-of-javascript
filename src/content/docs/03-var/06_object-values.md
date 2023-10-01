---
title: 'Object values: `values()`'
sidebar:
  label: Object values
---

## Getting all the values of an object using Object.values()

The `Object.values()` method gives you an array with all the values linked to an object's properties.

```js
const user = {
    name: 'John',
    age: 30,
}
console.log(Object.values(user)); // ['John', 30]
```