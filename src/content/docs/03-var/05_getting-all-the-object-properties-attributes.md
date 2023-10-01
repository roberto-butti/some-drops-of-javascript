---
title: 'Getting all the Object properties/attributes: `key()`'
sidebar:
  label: Object keys
---

## Getting all the properties of an object using Object.keys()
The `Object.keys()` method returns an array containing all the keys/properties of a given object.

```js
const user = {
    name: 'John',
    age: 30,
}

console.log(Object.keys(user)); // ['name', 'age']
```