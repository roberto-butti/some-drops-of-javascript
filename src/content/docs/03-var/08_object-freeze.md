---
title: 'Freezing an object'
sidebar:
  label: Freezing an object
---

## Prevent modification of an object using `Object.freeze()`

The `Object.freeze()` method freezes an object. A frozen object can no longer be changed,prevents new properties from being added to it and existing properties from being removed.

```js
const user = {
  name: 'John',
  age: 30,
}

Object.freeze(user) // Freeze the 'user' object
```

After calling `Object.freeze(user)`, attempting to modify the user object will have no effect:

```js
user.name = 'Jane' // This change will be ignored
```
### Use Case

The most common use case is in a web server configuration. When configuring a web server, it's often necessary to provide settings that are not expected to change. As a result, we freeze the configuration object to ensure its immutability.

```js
const serverConfig = {
  port: 8080,
  host: 'example.com',
  database: {
    username: 'dbUser',
    password: 'dbPassword',
    name: 'dbName',
  },
};

// Freeze the server configuration to prevent changes
Object.freeze(serverConfig);

// Attempting to modify the configuration will be ignored
serverConfig.port = 8888; // This change will be ignored
serverConfig.database.password = 'newPassword'; // This change will be ignored

console.log(serverConfig);

```
Here we used `const` and `freeze` both because, In JavaScript, it’s important not to confuse const, with immutability, `const` creates a variable name binding which can’t be reassigned after creation. `const` does not create immutable objects. For example, if you have a `const` variable that holds an object, you can't make it point to a different object, but you can still modify the properties or contents of the object it points to. This is why const doesn't make objects themselves immutable, only the variable holding the object. Thats why we need to freeze the object to make it immutable.

### Advantages

1. Freezing an object can improve performance in some cases, since the JavaScript engine does not need to check whether the object has been modified before performing certain operations.
2. It can also help prevent accidental changes to an object that is shared between multiple parts of the application.
