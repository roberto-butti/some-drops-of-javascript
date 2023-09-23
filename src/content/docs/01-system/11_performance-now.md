---
title: "Tracking the execution time getting the monotonic time"
sidebar:
  label: Tracking time
---

## Getting monotonic time: `performance.now()`

If you have to track execution time or the time spent in a script or a long-running application, you have to keep in mind that while you are executing your script and your logic the date time of the operating system could change because the user adjusts the hour, or the date time is adjusted automatically by the NTP system.
So if you want to track the millisecond spent executing a logic you need a monotonic time.
In JavaScript (Node.js) you have a kind of stopwatch that is started at the beginning of the execution of the script.
This timer is used for measuring performance because is a relative metric and it isn't affected by system clock changes.

```javascript
// saving the timer in startTime
let startTime = performance.now()
console.log('Starting')
// calculating the time by difference performance.now() - startTime
console.log(performance.now() - startTime, startTime)
```