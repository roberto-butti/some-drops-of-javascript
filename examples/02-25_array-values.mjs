// Examples for Array.values()

// Basic usage
const fruits = ['Apple', 'Banana', 'Orange']
console.log('Original array:', fruits)

console.log('\nIterating over values:')
const iterator = fruits.values()
for (const value of iterator) {
    console.log(value)
}
// Output:
// Apple
// Banana
// Orange

// Converting iterator to array
const numbers = [1, 2, 3, 4, 5]
console.log('\nOriginal array:', numbers)
const iterator2 = numbers.values()
const valuesArray = [...iterator2]
console.log('Values as array:', valuesArray)
// Output: [1, 2, 3, 4, 5]

// Using with iterator methods
const colors = ['red', 'green', 'blue']
console.log('\nOriginal array:', colors)
const iterator3 = colors.values()
console.log('First value:', iterator3.next().value)
console.log('Second value:', iterator3.next().value)
console.log('Third value:', iterator3.next().value)
console.log('Is iteration complete?', iterator3.next().done)
// Output:
// red
// green
// blue
// true

// Iterating over sparse arrays
const sparseArray = [1, , 3, , 5]
console.log('\nSparse array:', sparseArray)
console.log('Iterating over sparse array values:')
const iterator4 = sparseArray.values()
for (const value of iterator4) {
    console.log(value)
}
// Output:
// 1
// undefined
// 3
// undefined
// 5

// Iterating over array values
function processArrayValues(array) {
    console.log('\nProcessing array values:')
    const iterator = array.values()
    for (const value of iterator) {
        console.log(`Processing: ${value}`)
    }
}

processArrayValues(['a', 'b', 'c'])
// Output:
// Processing: a
// Processing: b
// Processing: c

// Creating multiple independent iterators
const data = [10, 20, 30]
console.log('\nOriginal array:', data)
const iterator5 = data.values()
const iterator6 = data.values()

console.log('First iterator - first value:', iterator5.next().value)
console.log('First iterator - second value:', iterator5.next().value)
console.log('Second iterator - first value:', iterator6.next().value)
// Output:
// 10
// 20
// 10 (independent iterator)

// Working with other iteration methods
const items = ['item1', 'item2', 'item3']
console.log('\nOriginal array:', items)
const iterator7 = items.values()

// Convert to array and apply array methods
const upperCaseItems = [...iterator7].map(item => item.toUpperCase())
console.log('Uppercase items:', upperCaseItems)
// Output: ["ITEM1", "ITEM2", "ITEM3"]

// Comparison with other array iterator methods
const arr = ['a', 'b', 'c']
console.log('\nOriginal array:', arr)

console.log('\nDifferent iterator methods:')
// values() - returns values
console.log('values():')
const valueIterator = arr.values()
for (const val of valueIterator) {
    console.log(val)
}
// Output: "a", "b", "c"

// keys() - returns indices
console.log('\nkeys():')
const keyIterator = arr.keys()
for (const key of keyIterator) {
    console.log(key)
}
// Output: 0, 1, 2

// entries() - returns [index, value] pairs
console.log('\nentries():')
const entryIterator = arr.entries()
for (const entry of entryIterator) {
    console.log(entry)
}
// Output: [0, "a"], [1, "b"], [2, "c"] 