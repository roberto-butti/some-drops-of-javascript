// Examples for Array.sort()

// Basic usage - sorting strings
const fruits = ['Banana', 'Orange', 'Apple', 'Mango']
console.log('Original array:', fruits)
fruits.sort()
console.log('Sorted array:', fruits)
// Output: ["Apple", "Banana", "Mango", "Orange"]

// Sorting numbers - default behavior
const numbers = [40, 100, 1, 5, 25, 10]
console.log('\nOriginal numbers:', numbers)
numbers.sort()
console.log('Sorted numbers (default):', numbers)
// Output: [1, 10, 100, 25, 40, 5] - not what you might expect!

// Using a compare function for numbers - ascending order
const numbers2 = [40, 100, 1, 5, 25, 10]
console.log('\nOriginal numbers:', numbers2)
numbers2.sort((a, b) => a - b)
console.log('Sorted numbers (ascending):', numbers2)
// Output: [1, 5, 10, 25, 40, 100]

// Sorting in descending order
const numbers3 = [40, 100, 1, 5, 25, 10]
console.log('\nOriginal numbers:', numbers3)
numbers3.sort((a, b) => b - a)
console.log('Sorted numbers (descending):', numbers3)
// Output: [100, 40, 25, 10, 5, 1]

// Sorting objects by property
const people = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 }
]
console.log('\nOriginal people array:')
console.log(people)

// Sort by age
people.sort((a, b) => a.age - b.age)
console.log('\nPeople sorted by age:')
console.log(people)
// Output: [{ name: 'Alice', age: 25 }, { name: 'John', age: 30 }, { name: 'Bob', age: 35 }]

// Sort by name
people.sort((a, b) => a.name.localeCompare(b.name))
console.log('\nPeople sorted by name:')
console.log(people)
// Output: [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 35 }, { name: 'John', age: 30 }]

// Case-insensitive sorting
const cities = ['Vienna', 'berlin', 'Amsterdam', 'paris']
console.log('\nOriginal cities array:', cities)
cities.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
console.log('Cities sorted case-insensitive:', cities)
// Output: ["Amsterdam", "berlin", "paris", "Vienna"]

// Custom sorting logic
const items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
]
console.log('\nOriginal items array:')
console.log(items)

// Sort by value, then by name if values are equal
items.sort((a, b) => {
    if (a.value !== b.value) {
        return a.value - b.value
    }
    return a.name.localeCompare(b.name)
})
console.log('\nItems sorted by value, then by name:')
console.log(items)

// Sorting with internationalization
const names = ['Österreich', 'Andorra', 'Vietnam', 'Zaire', 'Åland']
console.log('\nOriginal names array:', names)
const collator = new Intl.Collator('en')
names.sort((a, b) => collator.compare(a, b))
console.log('Names sorted with Intl.Collator:', names)
// Output: ["Åland", "Andorra", "Österreich", "Vietnam", "Zaire"]

// Demonstrating stability of sort
const data = [
    { id: 1, value: 'a' },
    { id: 2, value: 'b' },
    { id: 3, value: 'a' },
    { id: 4, value: 'c' }
]
console.log('\nOriginal data array:')
console.log(data)

// Sort by value
data.sort((a, b) => a.value.localeCompare(b.value))
console.log('\nData sorted by value (stable sort):')
console.log(data)
// Output: The elements with value 'a' maintain their relative order (id 1 before id 3) 