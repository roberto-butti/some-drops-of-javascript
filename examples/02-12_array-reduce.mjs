const numbers = [1, 2, 3, 4, 5]

const sumWithInitialValue = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 0) //Here 0 is an initial value to the accumulator

/* Here if we do not mention initialValue '0', then initial value of accumulator will be first array value 
and the currentValue will be second value of Array. */
const sumWithoutInitialValue = numbers.reduce((acc, curr) => {
  return acc + curr
})

console.log('SumWithInitialValue:', sumWithInitialValue)
console.log('SumWithoutInitialValue:', sumWithoutInitialValue)

//Counting the number of occurrences of elements in an array using reduce():
const fruits = ['apple', 'banana', 'orange', 'apple', 'banana', 'apple']

const fruitCounter = fruits.reduce((accumulator, currentFruit) => {
  accumulator[currentFruit] = (accumulator[currentFruit] || 0) + 1
  return accumulator
}, {})

console.log('Occurrences:', fruitCounter)
// Output: Occurrences: { apple: 3, banana: 2, orange: 1 }

//Finding the Maximum and Minimum Values using reduce():
const numbersArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]

const max = numbersArray.reduce((accumulator, currentValue) => {
  return Math.max(accumulator, currentValue)
})

const min = numbersArray.reduce((accumulator, currentValue) => {
  return Math.min(accumulator, currentValue)
})

console.log('Maximum value:', max) // Output: Maximum value: 9
console.log('Minimum value:', min) // Output: Minimum value: 1

//Transforming an Array into a Different Data Structure using reduce():
const data = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
]

const transformedData = data.reduce((accumulator, currentValue) => {
  accumulator[currentValue.id] = currentValue.name
  return accumulator
}, {})

console.log('Transformed Data:', transformedData)
// Output: Transformed Data: { 1: 'Alice', 2: 'Bob', 3: 'Charlie' }
