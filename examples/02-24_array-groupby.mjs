

// Sample inventory data
const inventory = [
  { name: 'asparagus', type: 'vegetables', quantity: 5 },
  { name: 'bananas', type: 'fruit', quantity: 0 },
  { name: 'goat', type: 'meat', quantity: 23 },
  { name: 'cherries', type: 'fruit', quantity: 5 },
  { name: 'fish', type: 'meat', quantity: 22 },
];

// Example 1: Grouping by item type
const groupedByType = Object.groupBy(inventory, ({ type }) => type);

console.log("Grouped by type:");
console.log(JSON.stringify(groupedByType, null, 2));
/* Expected output:
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
*/

// Example 2: Grouping by stock status
const groupedByStock = Object.groupBy(inventory, 
  ({ quantity }) => quantity > 5 ? 'in stock' : 'restock'
);

console.log("\nGrouped by stock status:");
console.log(JSON.stringify(groupedByStock, null, 2));
/* Expected output:
{
  "restock": [
    { "name": "asparagus", "type": "vegetables", "quantity": 5 },
    { "name": "bananas", "type": "fruit", "quantity": 0 },
    { "name": "cherries", "type": "fruit", "quantity": 5 }
  ],
  "in stock": [
    { "name": "goat", "type": "meat", "quantity": 23 },
    { "name": "fish", "type": "meat", "quantity": 22 }
  ]
}
*/

// Demonstration of using the grouped results
console.log("\nItems to restock:");
groupedByStock.restock?.forEach(item => 
  console.log(`- ${item.name} (Quantity: ${item.quantity})`)
);
/* Expected output:
Items to restock:
- asparagus (Quantity: 5)
- bananas (Quantity: 0)
- cherries (Quantity: 5)
*/

