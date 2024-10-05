const numbers = [5, 12, 8, 130, 44]

const lastLargeNumber = numbers.findLast((element) => element > 10)
console.log('Last number larger than 10:', lastLargeNumber)
// Expected output: 44

const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry']
const lastLongFruit = fruits.findLast((fruit) => fruit.length > 5)
console.log('Last fruit with more than 5 characters:', lastLongFruit)
// Expected output: elderberry

const people = [
  { name: 'Tom', age: 25 },
  { name: 'Bill', age: 30 },
  { name: 'Kate', age: 28 },
  { name: 'Pete', age: 32 },
]
const lastAdult = people.findLast((person) => person.age >= 30)
console.log('Last person aged 30 or older:', lastAdult)
// Expected output: { name: 'Pete', age: 32 }

// When no element satisfies the condition
const noMatch = numbers.findLast((num) => num > 1000)
console.log('No number larger than 1000:', noMatch)
// Expected output: undefined
