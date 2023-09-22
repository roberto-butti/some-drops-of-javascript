import { cpus } from 'os'
cpus().forEach(cpu => {
  console.info(cpu.model + ' speed: ' + cpu.speed)
  console.table(cpu.times)
})
