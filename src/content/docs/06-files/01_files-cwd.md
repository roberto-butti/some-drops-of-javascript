---
title: 'Getting the Current Working Directory'
description: 'Using process.cwd() to retrieve the current working directory'
sidebar:
  label: Current Directory
---

## Getting the current working directory with `process.cwd()`

The `process.cwd()` method returns the current working directory of the process.

## Syntax

```javascript
process.cwd()
```

### Parameters

This method doesn't take any parameters.

### Return Value

Returns a string representing the current working directory of the process.

## Use Cases

### 1. Accessing Files Relative to the Current Directory

```javascript
const fs = require('fs');
const path = require('path');

const currentDir = process.cwd();
const filePath = path.join(currentDir, 'example.txt');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

### 2. Logging the Current Working Directory

```javascript
console.log(`The current working directory is: ${process.cwd()}`);
```

## Common Pitfalls

1. **Assuming it's the Script's Directory**: `process.cwd()` returns the directory from which the JavaScript process was launched, not necessarily the directory of the script being executed.

2. **Not Accounting for Symbolic Links**: If your application is run from a symbolic link, `process.cwd()` will return the real path, not the path of the symbolic link.

3. **Changing Working Directory**: Be cautious when changing the working directory with `process.chdir()`, as it affects the entire Node.js process and can lead to unexpected behavior in other parts of your application.

## Additional Resources

- [Node.js Documentation: process.cwd()](https://nodejs.org/api/process.html#processcwd)
- [Node.js Documentation: process.chdir()](https://nodejs.org/api/process.html#processchdirdirectory)
- [Working with File Paths in Node.js](https://nodejs.org/api/path.html)