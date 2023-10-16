---
title: 'Checking for Object Sealing in JavaScript'
sidebar:
  label: Object Sealing
---

## Determining Object Sealing with `Object.isSealed()`

The `Object.isSealed()` method allows you to check whether an object is sealed, which means that properties cannot be added or removed, but existing properties can still have their values changed.

```js
const car = {
    make: 'Toyota',
    model: 'Camry',
}

Object.seal(car);

console.log(Object.isSealed(car)); // true
```

## Use Cases

`Object.isSealed()` is valuable when you need to confirm whether an object is sealed, restricting changes to its structure while permitting alterations to property values. For example, consider a user account object:

```js
const userAccount = {
  username: 'jsmith',
  email: 'jsmith@example.com',
  isAdmin: false,
};

Object.seal(userAccount);

// Checking if the 'userAccount' object is sealed.
if (Object.isSealed(userAccount)) {
  console.log('The user account is sealed.');
} else {
  console.log('The user account structure can still be modified.');
}
```

By using `Object.isSealed()`, you can ensure that the object's structure remains constant, providing data consistency within your applications.