import { totalmem } from 'os'
const m = totalmem()
console.log(
  'Hi, the total memory is %d bytes',
  m
)
console.log(
  'Hi, the total memory is %d kilobytes',
  m / 1024
)
console.log(
  'Hi, the total memory is %d megabytes',
  m / 1024 / 1024
)
console.log(
  'Hi, the total memory is %d gigabytes',
  m / 1024 / 1024 / 1024
)
