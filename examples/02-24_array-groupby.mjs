// File: examples/02-array/cwd.js

// Sample inventory data: an array of objects representing different items
const inventory = [
  { name: 'asparagus', type: 'vegetables', quantity: 5 },
  { name: 'bananas', type: 'fruit', quantity: 0 },
  { name: 'goat', type: 'meat', quantity: 23 },
  { name: 'cherries', type: 'fruit', quantity: 5 },
  { name: 'fish', type: 'meat', quantity: 22 },
]

// Using array.groupBy() to group inventory items by their type
// The callback function ({ type }) => type is a shorthand for (item) => item.type
const result = inventory.groupBy(({ type }) => type)

// Output the grouped result
// JSON.stringify is used with parameters to format the output:
// - null: No replacer function is used
// - 2: Number of spaces for indentation, making the output more readable
console.log(JSON.stringify(result, null, 2))

// Expected output:
// {
//   "vegetables": [
//     { "name": "asparagus", "type": "vegetables", "quantity": 5 }
//   ],
//   "fruit": [
//     { "name": "bananas", "type": "fruit", "quantity": 0 },
//     { "name": "cherries", "type": "fruit", "quantity": 5 }
//   ],
//   "meat": [
//     { "name": "goat", "type": "meat", "quantity": 23 },
//     { "name": "fish", "type": "meat", "quantity": 22 }
//   ]
// }
