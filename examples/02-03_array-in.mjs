
const fruits = {
  strawberry: 'Strawberry',
  kiwi: 'Kiwi',
  lemon: 'Lemon'
}

console.table(fruits)
if ('kiwi' in fruits) {
  console.log('Kiwi is present')
}

console.log('kiwi' in fruits ? 'Yes! Kiwi' : 'ther is no kiwi here')

// checking if the attribute is not defined can fails in this specific case:
fruits.something = undefined
if (fruits.somethingelse === undefined) {
  console.log('Somethingelse attribute does not exist')
}
if (fruits.something === undefined) {
  console.log('Something attribute exists but the value is undefined')
}

const fruitsObject = {}
fruitsObject.strawberry = 'Strawberry'
fruitsObject.kiwi = 'Kiwi'
fruitsObject.lemon = 'Lemon'
console.dir(fruitsObject)
console.log('kiwi' in fruitsObject) // true
console.log('something' in fruitsObject) // false

const fruitsArray = []
fruitsArray.push('Strawberry')
fruitsArray.push('Kiwi')
fruitsArray.push('Lemon')
console.dir(fruitsArray)
console.log(2 in fruitsArray) // true
console.log(3 in fruitsArray) // false
