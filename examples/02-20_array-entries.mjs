// Examples for Array.entries()

// Basic usage
const fruits = ['Apple', 'Banana', 'Orange']
console.log('Original array:', fruits)

console.log('\nIterating over entries:')
const iterator = fruits.entries()
for (const entry of iterator) {
    console.log(entry)
}
// Output:
// [0, "Apple"]
// [1, "Banana"]
// [2, "Orange"]

// Destructuring in loop
const colors = ['red', 'green', 'blue']
console.log('\nOriginal array:', colors)
console.log('Destructuring entries in loop:')
const iterator2 = colors.entries()
for (const [index, value] of iterator2) {
    console.log(`${index}: ${value}`)
}
// Output:
// "0: red"
// "1: green"
// "2: blue"

// Converting iterator to array
const numbers = [1, 2, 3, 4, 5]
console.log('\nOriginal array:', numbers)
const iterator3 = numbers.entries()
const entriesArray = [...iterator3]
console.log('Entries as array:', entriesArray)
// Output: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]]

// Using with iterator methods
const letters = ['a', 'b', 'c']
console.log('\nOriginal array:', letters)
const iterator4 = letters.entries()
console.log('First entry:', iterator4.next().value)
console.log('Second entry:', iterator4.next().value)
console.log('Third entry:', iterator4.next().value)
console.log('Is iteration complete?', iterator4.next().done)
// Output:
// [0, "a"]
// [1, "b"]
// [2, "c"]
// true

// Creating a Map from an array
function arrayToMap(array) {
    const map = new Map()
    for (const [index, value] of array.entries()) {
        map.set(index, value)
    }
    return map
}

const fruitsMap = arrayToMap(fruits)
console.log('\nCreating a Map from array:')
console.log('Map.get(1):', fruitsMap.get(1)) // Output: "Banana"
console.log('Map has 0:', fruitsMap.has(0)) // Output: true
console.log('Map has 3:', fruitsMap.has(3)) // Output: false

// Filtering with index awareness
function filterWithIndex(array, callback) {
    const result = []
    for (const [index, value] of array.entries()) {
        if (callback(value, index)) {
            result.push(value)
        }
    }
    return result
}

const nums = [10, 20, 30, 40, 50]
console.log('\nOriginal array:', nums)
const filteredNumbers = filterWithIndex(nums, (value, index) => index % 2 === 0)
console.log('Elements at even indices:', filteredNumbers) // Output: [10, 30, 50]

// Creating an object with array indices as keys
function arrayToObject(array) {
    return Object.fromEntries(array.entries())
}

const fruitsObject = arrayToObject(fruits)
console.log('\nCreating an object from array:')
console.log(fruitsObject)
// Output: { 0: "Apple", 1: "Banana", 2: "Orange" }

// Comparison with other array iterator methods
const arr = ['a', 'b', 'c']
console.log('\nOriginal array:', arr)

console.log('\nDifferent iterator methods:')
// entries() - returns [index, value] pairs
console.log('entries():')
const entryIterator = arr.entries()
for (const entry of entryIterator) {
    console.log(entry)
}
// Output: [0, "a"], [1, "b"], [2, "c"]

// keys() - returns indices
console.log('\nkeys():')
const keyIterator = arr.keys()
for (const key of keyIterator) {
    console.log(key)
}
// Output: 0, 1, 2

// values() - returns values
console.log('\nvalues():')
const valueIterator = arr.values()
for (const value of valueIterator) {
    console.log(value)
}
// Output: "a", "b", "c" 