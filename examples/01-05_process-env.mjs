console.log(process.env)
console.log(process.env.PATH)
const envVarName = 'PATH'
if (envVarName in process.env) {
  console.log(process.env[envVarName])
} else {
  console.log('no %s defined', envVarName)
}

Object.keys(process.env).forEach(function (key, index) {
  console.log(key, index, process.env[key])
})
