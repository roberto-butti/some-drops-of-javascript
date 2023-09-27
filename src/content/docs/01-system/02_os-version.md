---
title: "OS information"
sidebar:
  label: OS information
---
If you need to retrieve information about the Operating System, like the version, the release, the platform, the release, you can use some functions implemented by the `os` module.

## The Operating System version: `os.version()`
The `os` module has the `version()` method to return the version of the Operating System in use.

~~~javascript
import { version } from 'os'
const version = version()
console.log(v)
~~~

The `version()` method returns a string with the full name of the Operating System version, like this:

~~~
Darwin Kernel Version 21.6.0: Wed Aug 10 14:28:23 PDT 2022; root:xnu-8020.141.5~2/RELEASE_ARM64_T6000
~~~

## The Operating System platform: `os.platform()`

The `os` module has the `platform()` function to return the name of the platform of the Operating System in use.

~~~javascript
import { platform } from 'os'
const platform = platform()
console.log(platform)
~~~

The `platform()` method returns a string with the name of the platform Operating System version, like for example: `aix`, `android`, `darwin`, `freebsd`,`linux`, `openbsd`, `sunos`, or `win32`.
If you are running Node on a Mac OS machine, you will obtain `darwin`.
