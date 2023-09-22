import { userInfo } from 'os'
const u = userInfo()
console.log(
  'Hi, %s here your infos:',
  u.username
)
console.table(u)
/*
┌──────────┬──────────────────┐
│ (index)  │      Values      │
├──────────┼──────────────────┤
│   uid    │       501        │
│   gid    │        20        │
│ username │    'roberto'     │
│ homedir  │ '/Users/roberto' │
│  shell   │    '/bin/zsh'    │
└──────────┴──────────────────┘
*/
