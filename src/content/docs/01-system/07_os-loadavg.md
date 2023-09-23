---
title: "Getting the load average of CPU"
sidebar:
  label: CPU load
---

## The load average of CPU: `os.loadavg()`

The `os` module has the `loadavg()` method to return the "load" measurement information about the CPU usage of the system.
The "load" measurement is calculated by the number of processes that are being executed by the CPU or in a 'waiting' state.

The `loadavg()` function returns an array with 3 float numbers. These three numbers represents the average system load calculated over a given period of 1, 5 and 15 minutes


```javascript
import { loadavg } from 'os'
const la = loadavg()
console.log(
  la[0], // last minute
  la[1], // last 5 minutes
  la[2]  // last 15 minutes
)
// it returns: 1.59619140625 2.42822265625 2.60400390625
```

>{quote} On Windows machine this functionality is not available, the method returns an array with 0 values, like `[0, 0, 0]`
