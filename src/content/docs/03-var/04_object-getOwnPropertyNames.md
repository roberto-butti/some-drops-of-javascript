---
title: 'Getting the object properties'
sidebar:
  label: The object property names
---

## Getting the property names of an object: `getOwnPropertyNames()`

The `getOwnPropertyNames()` method is a built-in JavaScript function that <b>returns an array of all non-inherited, enumerable properties of an object.</b> These properties are the object's own properties, which have been defined directly on the object, and are not inherited from its prototype chain.

The `getOwnPropertyNames()` method is useful when you need to obtain a list of an object's own properties for various purposes, such as serialization, copying, or enumeration.

### Example

Here's an example demonstrating the use of `getOwnPropertyNames()` to retrieve all the own property names:

```javascript
const person = {
  firstName: 'Sarah',
  lastName: 'Connor',
  age: 25,
}

// Addition of an own property
person.country = 'USA'

// Retrieving own property names
const ownPropertyNames = Object.getOwnPropertyNames(person)

console.log(ownPropertyNames)
```
