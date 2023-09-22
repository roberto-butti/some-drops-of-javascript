---
title: "Info for the current user: `os.userInfo()`"
---

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
