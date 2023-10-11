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

console.log(Object.keys(user)) // ['name', 'age']
```

## Usecases

- If you need to check whether a specific property exists in an object, you can use Object.keys() and then search for the property in the resulting array.

```js
const user = {
  name: 'John',
  age: 30,
}

const propertyToCheck = 'name'
const isExit = Object.keys(user).includes(propertyToCheck)
  ? 'Exists'
  : 'Does not exist'

console.log(`The property "${propertyToCheck}" ${isExit}.`)
```
- If you need to get all the properties of an object, you can use Object.keys() and then loop through the resulting array.
```js
for (const key of Object.keys(user)) {
  console.log(user[key])
}
```
