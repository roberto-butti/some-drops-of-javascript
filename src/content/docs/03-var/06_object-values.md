---
title: 'Object values: `values()`'
sidebar:
  label: Object values
---
## Getting all the values of an object using Object.values()

The Object.values() method returns an array containing all the values associated with an object's own enumerable properties.

```js
const  user  = {
name: 'John',
age: 30,
}

console.log(Object.values(user)); // ['John', 30]
```