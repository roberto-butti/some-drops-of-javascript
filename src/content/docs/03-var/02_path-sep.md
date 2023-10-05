---
title: 'Path Seperator: `sep`'
sidebar:
  label: Path Seperator
---

## Path Seperator: `sep`

The `path.sep` property is a platform-specific path segment separator used in file system paths. It provides a string representing the character used to separate directories or folders in a file path. The value of `path.sep` varies depending on the operating system.

On `Unix-based` systems (Linux, macOS), path.sep is '/'.    
On `Windows` systems, path.sep is '\\'. 

This property is particularly useful when working with file paths in a cross-platform manner, as it ensures that the appropriate separator is used based on the underlying operating system.

### Example

In the below example, `path.sep` is used to concatenate the folder and file name with the appropriate separator for the current platform. This ensures that the file path is generated correctly regardless of whether you are running the code on a Unix-based system or Windows:

```javascript
const path = require('path');

const folderName = 'documents';
const fileName = 'file.txt';

const filePath = `user${path.sep}${folderName}${path.sep}${fileName}`;

console.log(`File Path: ${filePath}`);
//Linux: File Path: user/documents/file.txt
//Windows: File Path: user\documents\file.txt
```
