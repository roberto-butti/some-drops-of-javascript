---
title: "Getting the network interfaces information"
sidebar:
  label: Network interfaces
---

## Network interfaces information: `os.networkInterfaces()`

The `os` module has the `networkInterfaces()` method to return the object that shows the information about the network interfaces available on the system.
The object has multiple interfaces.
Each interface has an identifier used as an object key attribute like `lo0`, `en0`, `utun0`, `utun1` ... etc.
Each interface has an array of addresses.
Each address is an object like this one:

```json
{
    address: '127.0.0.1',
    netmask: '255.0.0.0',
    family: 4,
    mac: '00:00:00:00:00:00',
    internal: true,
    cidr: '127.0.0.1/8'
}
```

Where `address`, `netmask`, `mac`, `cidr` are the address (ip address, mac addres) and netmask.
The `family` attribute identifies the type of the ip protocol.
The `internal` attribute is a boolean value, `true` if the address is remotely accessible.

```javascript
import { networkInterfaces } from 'os'
const ni = networkInterfaces()

Object.keys(ni).forEach(function (key, index) {
  // each interfaces has an array
  ni[key].forEach(function (element, index) {
    // selecting only family === 4 (ipv4 interfaces)
    if (element.family === 4) {
      console.log('IP ADDRESS: ' + element.address) // IPv4 address
    }
  })
})
```
