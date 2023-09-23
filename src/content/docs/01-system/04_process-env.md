---
title: "Access to environment variables: process.env"
sidebar:
  label: Environment Vars
---

## Access to environment variables: process.env

The `process` global module has the `env` attribute to return information on the environment variable.
The `process.env` attribute contains an object and it represents the list of environment variables. Each attribute is an environment variable.
The `process` module is a global module, which means that you don't have to import the process module manually, but it is automatically available in your code.

For retrieving the environment variables object:
```javascript
console.log(process.env)
```

If you want to access a specific environment variable via the name (for example to the `PATH` environment variable):
```javascript
console.log(process.env.PATH)
```

If you have to access dynamically to an environment variable, you can use the square brackets:
```javascript
const envVarName = 'PATH'
if (envVarName in process.env) {
  console.log(process.env[envVarName])
} else {
  console.log('no %s defined', envVarName)
}
```

If you want to walk through all the environment variables you can iterate on the object attributes via `Object.keys()` method:

```javascript
Object.keys(process.env).forEach(function (key, index) {
  console.log(key, index, process.env[key])
})
```
