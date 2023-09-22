---
title: "Stop the script execution: `process.exit()`"
---

## Stop the script execution: `process.exit()`

The `process` global module has the `exit()` method to stop the current execution and return to the shell, or in general to the environment where the script was launched.
All the processes can return a status code to the shell. By convention, if the execution ends correctly a status code value equal to 0 is returned. In case of an error, the process can return a not 0 status code value.
So if you want to stop the execution of the script and return a status code equal to 99 you can use `process.exit(99)` like the example:

```javascript
console.log('Executing ...')
process.exit(99)
console.log('Never executed')
```

Executing this snippet, a `99` status code error will be returned to the shell.
For example, once the script execution is terminated, you can test the shell environment variable `$?` that contains the status code of the last process executed. If you execute in a shell (`bash` or `zsh` or some other shell) the node script and then try to show the last status code via `echo $?`:

```bash
node examples/01-09_process-exit.mjs
echo $?
```

You will see the `99` value will be shown in the terminal (because the JS script returns with `process.exit(99)`).