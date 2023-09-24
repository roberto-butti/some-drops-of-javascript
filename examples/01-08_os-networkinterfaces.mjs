import { networkInterfaces } from 'os'
const ni = networkInterfaces()

Object.keys(ni).forEach(function (key, index) {
  // each interfaces has an array
  ni[key].forEach(function (element, index) {
    // selecting only family === 4 (ipv4 interfaces)
    if (element.family === 4) {
      console.log('IP ADDRESS: ' + element.address) // IP address
    }
  })
  // console.log(key, index, ni[key])
})
