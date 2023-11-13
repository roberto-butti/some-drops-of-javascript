---
title: "Get the amount of total memory available in bytes"
sidebar:
  label: Available memory
---

## Get the amount of total memory available in bytes (as integer): `os.totalmem()`

The `os` module has the `totalmem()` method to return information on the total memory available in the system.
The `totalmem()` function returns an integer and it represents the bytes. If you need megabytes or kilobytes you have to convert it.

```javascript
import { totalmem } from 'os'
const mem = totalmem()
console.log(
  'Hi, the total memory is %d gigabytes',
  mem / 1024 / 1024 / 1024
)
```
