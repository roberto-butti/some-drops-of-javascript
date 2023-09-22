---
title: "Info from CPU: `os.cpus()`"
---
## Info from CPU: `os.cpus()`

The `os` module allows you to retrieve some relevant information about the environment used for running your _Node.js_ script or application.

```javascript
import { cpus } from 'os'
const c = cpus()
```

The `os` module provides you with some methods. One of them is the `cpus()` that returns the list of CPUs available in your environment. For each element of the list (each element is one CPU), you have the `model` attribute that has the CPU model name (for example "Apple M1 Pro") and the `speed` attribute, an integer for showing the speed of the CPU.
Then you have also `times` attribute for the times (in milliseconds) that the CPU has spent in these modes: `user`, `nice` (valid only for Posix systems, in Windows this value is always 0), `sys`, `idle`, `irq`.
So, you can walk through the list of CPUs:

```js
import { cpus } from 'os'
cpus().forEach(cpu => {
  console.info(cpu.model + ' speed: ' + cpu.speed)
  console.table(cpu.times)
})
```
