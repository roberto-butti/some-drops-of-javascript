import { cpus } from 'os'

// getting the CPUs via os.cpus() and looping
cpus().forEach((cpu, index) => {
  // each cpu item has: mode, speed and times
  console.log(`CPU ${index + 1}:`)
  console.log(` Model: ${cpu.model}`)
  console.log(` Speed: ${cpu.speed} MHz`)
  console.log(` Time (milliseconds) spent in`)
  console.log(`  User mode      : ${cpu.times.user} ms.`)
  console.log(`  Nice mode      : ${cpu.times.nice} ms.`)
  console.log(`  System mode    : ${cpu.times.sys} ms.`)
  console.log(`  For interrupts : ${cpu.times.irq} ms.`)
})

console.log('*** Calculating the CPU utilization ***')
cpus().forEach((cpu, index) => {
  const { user, nice, sys, idle, irq } = cpu.times
  const total = user + nice + sys + idle + irq

  const usage = ((total - idle) / total) * 100
  console.log(`CPU ${index + 1} Usage: ${usage.toFixed(2)}%`)
})

console.log('*** Identifying the Number of Logical CPU Cores ***')
const numCpus = cpus().length
console.log(`Number of logical CPU cores: ${numCpus}`)
