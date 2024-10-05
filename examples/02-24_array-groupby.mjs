// Sample inventory data
const inventory = [
  { name: 'asparagus', type: 'vegetables', quantity: 5 },
  { name: 'bananas', type: 'fruit', quantity: 0 },
  { name: 'goat', type: 'meat', quantity: 23 },
  { name: 'cherries', type: 'fruit', quantity: 5 },
  { name: 'fish', type: 'meat', quantity: 22 },
]

// Example 1: Grouping by type
const resultByType = Object.groupBy(inventory, ({ type }) => type)

console.log('Grouped by type:')
console.log(JSON.stringify(resultByType, null, 2))

// Example 2: Grouping by stock status
function stockStatus({ quantity }) {
  return quantity > 5 ? 'ok' : 'restock'
}

const resultByStock = Object.groupBy(inventory, stockStatus)

console.log('\nGrouped by stock status:')
console.log(JSON.stringify(resultByStock, null, 2))

// Expected output:
/*
Grouped by type:
{
  "vegetables": [
    { "name": "asparagus", "type": "vegetables", "quantity": 5 }
  ],
  "fruit": [
    { "name": "bananas", "type": "fruit", "quantity": 0 },
    { "name": "cherries", "type": "fruit", "quantity": 5 }
  ],
  "meat": [
    { "name": "goat", "type": "meat", "quantity": 23 },
    { "name": "fish", "type": "meat", "quantity": 22 }
  ]
}

Grouped by stock status:
{
  "restock": [
    { "name": "asparagus", "type": "vegetables", "quantity": 5 },
    { "name": "bananas", "type": "fruit", "quantity": 0 },
    { "name": "cherries", "type": "fruit", "quantity": 5 }
  ],
  "ok": [
    { "name": "goat", "type": "meat", "quantity": 23 },
    { "name": "fish", "type": "meat", "quantity": 22 }
  ]
}
*/
