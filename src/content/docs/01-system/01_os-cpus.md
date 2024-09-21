---
title: "CPUs information"
sidebar:
  label: CPUs information
---
## Info from CPU: `os.cpus()`

The `os` module allows you to retrieve some relevant information about the environment used for running your _Node.js_ script or application.

```javascript
import { cpus } from 'os'
const c = cpus()
```

The `os` module provides you with some methods. One of them is the `cpus()` that returns the list of CPUs available in your environment. For each element of the list (each element is one CPU), you have the `model` attribute that has the CPU model name (for example "Apple M1 Pro") and the `speed` attribute, an integer for showing the speed of the CPU.
Then you have also `times` attribute for the times (in milliseconds) that the CPU has spent in these modes: `user`, `nice` (valid only for Posix systems, in Windows this value is always 0), `sys`, `idle`, `irq`.

It returns:

An array of objects, where each object represents a **logical** CPU core and contains the following properties:
- `model` (string): The model of the CPU.
- `speed` (number): The speed of the CPU in MHz.
- `times` (object): An object containing the number of milliseconds the CPU has spent in different modes:
  - `user` (number): Time spent in user mode.
  - `nice` (number): Time spent in nice mode.
  - `sys` (number): Time spent in system mode.
  - `idle` (number): Time spent in idle mode.
  - `irq` (number): Time spent servicing interrupts.

So, you can walk through the list of CPUs:

```js
import { cpus } from 'os'
cpus().forEach(cpu => {
  console.info(cpu.model + ' speed: ' + cpu.speed)
  console.table(cpu.times)
})
```


### Calculating the CPU utilization

You can use the `os.cpus()` function to calculate the utilization of each CPU core, which is useful for performance monitoring and work load analysis.

```javascript
import { cpus } from 'os'
console.log("*** Calculating the CPU utilization ***")
cpus().forEach((cpu, index) => {
  const { user, nice, sys, idle, irq } = cpu.times;
  const total = user + nice + sys + idle + irq;

  const usage = ((total - idle) / total) * 100;
  console.log(`CPU ${index + 1} Usage: ${usage.toFixed(2)}%`);
});
```

### Identifying the Number of Logical CPU Cores

In scenarios where you need to determine the number of **logical CPU cores** available for parallel processing, you can use os.cpus() as follows:


```javascript
import { cpus } from 'os'
const numCpus = cpus().length;

console.log(`Number of logical CPU cores: ${numCpus}`);
```

The `os.cpus()` function returns an array where each element represents a logical CPU core. The length of this array gives the number of logical CPU cores available.
This is particularly useful when creating worker threads or child processes to maximize CPU utilization.

### Common Pitfalls

- Misunderstanding Logical vs. Physical Cores: The `os.cpus()` function returns the number of logical cores, not physical cores. In systems with hyper-threading, the number of logical cores will be higher than the number of physical cores.
- Platform-Specific Behavior: The data returned by `os.cpus()` may vary slightly depending on the operating system. Ensure compatibility and testing across different platforms if your application needs to run on multiple OS types.

### Resources

- Node.js Documentation: [os.cpus](https://nodejs.org/api/os.html#oscpus)
- Chapter: Get the amount of total memory available in bytes [os.totalmem()](/01-system/06_os-totalmem/)
- Chapter: Get the amount of free memory in bytes [os.freemem()](/01-system/05_os-freemem/)
