---
title: 'Object entries: `entries()`'
sidebar:
  label: Object entries
---

## Getting key-value pairs of an object using Object.entries()
The Object.entries() method returns an array of key-value pairs for each element in the object.

```js
const user = {
    name: 'John',
    age: 30
}
console.log(Object.entries(user)); // [['name', 'John'], ['age', 30]]
```