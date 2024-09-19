import { cpus } from 'os'

// getting the CPUs via os.cpus() and looping
cpus().forEach((cpu) => {
  // each cpu item has: mode, speed and times
  console.info(cpu.model + ' speed: ' + cpu.speed)
  console.table(cpu.times)
})
