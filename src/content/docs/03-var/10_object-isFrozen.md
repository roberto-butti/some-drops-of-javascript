---
title: 'Checking for Object Immutability in JavaScript'
sidebar:
  label: Object Immutability
---

## Verifying Object Immutability with `Object.isFrozen()`

The `Object.isFrozen()` method enables you to check whether an object is completely immutable, meaning that none of its properties can be added, removed, or altered.

```js
const book = {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
}

Object.freeze(book);

console.log(Object.isFrozen(book)); // true
```

## Use Cases

`Object.isFrozen()` is valuable when you need to confirm whether an object is entirely unchangeable. For instance, consider a configuration object for a web application:

```js
const config = {
  theme: 'dark',
  language: 'en',
  mode: 'light',
};

Object.freeze(config);

// Checking if the 'config' object is frozen.
if (Object.isFrozen(config)) {
  console.log('The configuration is immutable.');
} else {
  console.log('The configuration can still be altered.');
}
```

By using `Object.isFrozen()`, you can ensure that an object remains unchanged, maintaining data integrity in your applications.

