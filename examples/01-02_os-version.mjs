import { version, platform, release, machine } from 'os'
const v = version()
console.log(`Version: ${v}`)
// Example
// Version: Darwin Kernel Version 22.5.0: Thu Jun  8 22:22:20 PDT 2023; root:xnu-8796.121.3~7/RELEASE_ARM64_T6000
const p = platform()
console.log(`Platform: ${p}`)
// Example
// Platform: darwin
const r = release()
console.log(`Release: ${r}`)
// Example
// Release: 22.5.0
const m = machine()
console.log(`Machine: ${m}`)
// Example
// Machine: arm64
