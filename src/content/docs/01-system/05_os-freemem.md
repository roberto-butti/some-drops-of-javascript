---
title: "Get the amount of free memory in bytes (as integer): `os.freemem()`"
sidebar:
  label: Free memory
---

## Get the amount of free memory in bytes (as integer): `os.freemem()`
The `os` module has the `freemem()` method to return information on the free memory available in the system.
The `freemem()` function returns an integer and it represents the bytes. If you need megabytes or kilobytes you have to convert it.

```javascript
import { freemem } from 'os'
const mem = freemem()
console.log('The amount of free memory is %d bytes', mem)
```
