---
title: 'Sealing an object'
sidebar:
  label: Sealing an object
---


## Sealing Objects with `Object.seal()`

The `Object.seal()` method allows you to seal an object, preventing the addition or deletion of properties while still allowing property values to be changed.


```js
const user = {
    name: 'John',
    age: 30,
}

Object.seal(user);

// Attempt to add a new property (won't work)
user.country = 'USA';

// Attempt to delete a property (won't work)
delete user.age;

// Changing an existing property value (will work)
user.name = 'Alice';

console.log(user);
```
### Use Cases
`Object.seal()` is useful when you want to restrict modifications to an object but still allow for property value changes. For example, consider a user profile object:


```js
const userProfile = {
  username: 'jsmith',
  email: 'jsmith@example.com',
  isAdmin: false,
};

Object.seal(userProfile);

// Attempting to add a new property or delete a property won't work.
// However, you can change the values of existing properties.

```
By sealing the userProfile object, you ensure that the structure remains constant, but you can update user details as needed.