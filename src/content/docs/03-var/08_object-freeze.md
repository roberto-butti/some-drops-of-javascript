---
title: 'Object freeze: `freeze()`'
sidebar:
  label: Object freeze
---

## Prevent modification of an object using Object.freeze()
The `Object.freeze()` method freezes an object. A frozen object can no longer be changed,prevents new properties from being added to it, existing properties from being removed. 

```js
const user = {
  name: 'John',
  age: 30
};

Object.freeze(user);
console.log(Object.isFrozen(user)); // true
user.name = "Jane"; // will be ignored
```  