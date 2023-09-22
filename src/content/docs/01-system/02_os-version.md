---
title: "Info from Operating System: `os.version()`"
---

## Info from Operating System: `os.version()`
The `os` module has the `version`()` method to return the version of the Operating System in use.

```javascript
import { version } from 'os'
const version = version()
console.log(v)
```
The `version()` method returns a string with the full name of the Operating System version, like this:
```
Darwin Kernel Version 21.6.0: Wed Aug 10 14:28:23 PDT 2022; root:xnu-8020.141.5~2/RELEASE_ARM64_T6000
```