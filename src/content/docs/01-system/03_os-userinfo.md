---
title: "Getting user information"
sidebar:
  label: User information
---
When you launch a Node script, you will launch it with a specific operating system user. The user used for launcing the script determines the permission of the script.
If you need to retrieve the information related to the current user you can use `userInfo()` function.

## Info for the current user: `os.userInfo()`
The `os` module has the `userInfo`()` method to return information on the current system user.

```javascript
import { userInfo } from 'os'
const u = userInfo()
```

The `userInfo()` method returns an object with attributes:

- `uid`: the user identifier (integer)
- `gid`: the group identifier (integer)
- `username`: the username (string)
- `homedir`: the user's home directory (string)
- `shell`: the user's shell (string)
