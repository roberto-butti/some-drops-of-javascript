---
title: "Get temporary directory: `os.tmpdir()`"
sidebar:
  label: Temp directory
---

## Get temporary directory: `os.tmpdir()`

If you need to store temporary a file in your script, you can save the temporary file in the default operating system temporary directory.
You can retrieve the current operating system temporary directory via `tmpdir()` function:

```javascript
import { tmpdir } from 'os'
console.log('Temporary directory: %s', tmpdir())
```
