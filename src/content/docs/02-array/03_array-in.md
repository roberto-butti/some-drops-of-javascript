---
title: "Check if a property exists in the object or array: `in`"
sidebar:
  label: Checking a property
---

## Check if a property exists in the object or array: `in`

If you have an object and you want to check if a property is present you can use the `in` operator.

```javascript
const fruits = {
  strawberry: 'Strawberry',
  kiwi: 'Kiwi',
  lemon: 'Lemon'
}
// for checking the presence of an property you can use in operator
if ('kiwi' in fruits) {
  console.log('Kiwi is present')
}
// you can use in the short form
console.log('kiwi' in fruits ? 'Yes! Kiwi' : 'ther is no kiwi here')
```

I think the `in` operator is one of the best ways to check the presence of a property because, for example, if you want to check if the value is `undefined`, you can't distinguish the cases if the property doesn't exist or the property exists and has an undefined value:

```javascript
const fruits = {
  strawberry: 'Strawberry',
  kiwi: 'Kiwi',
  lemon: 'Lemon'
}

fruits.something = undefined
if (fruits.somethingelse === undefined) {
    console.log('Somethingelse property does not exist')
}
if (fruits.something === undefined) {
  console.log('Something property exists but the value is undefined')
}
```

The `in` operator works also with the arrays. With the arrays, you can check the presence of the numeric index:

```javascript
const fruitsArray = []
fruitsArray.push('Strawberry')
fruitsArray.push('Kiwi')
fruitsArray.push('Lemon')
console.dir(fruitsArray)
console.log(2 in fruitsArray) // true
console.log(3 in fruitsArray) // false
```