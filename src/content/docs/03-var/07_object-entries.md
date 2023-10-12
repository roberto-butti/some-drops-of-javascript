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

## Usecases
- If you want to determine the number of key-value pairs in an object, you can use the `Object.entries()`method. 
```js
console.log(Object.entries(user).length); // 2
```
- If you want to get the `keys` of an object then you can use the `Object.entries()`method.
```js
console.log(Object.entries(user).map(item => item[0])); // ['name', 'age']
```
- If you want to get the `values` of an object then you can use the `Object.entries()`method.
```js
console.log(Object.entries(user).map(item => item[1])); // ['John', 30]
```
- If you want to check if an object has a specific key then you can use the `Object.entries()`method.
```js
console.log(Object.entries(user).some(item => item[0] === 'name')); // true
```
If you're wondering why we can use array methods with `Object.entries()`, remember that the `Object.entries()` method returns an array of key-value pairs. We can then apply methods like `map()`, `some()`, and `length` to this array to access or manipulate its values.