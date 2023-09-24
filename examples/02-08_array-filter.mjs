const numbers = [3, 75, 42, 13, 69]
const resultNumbers = numbers.filter((number) => number >= 50)
console.dir(resultNumbers)
// output: Array [ 75, 69 ]

const elements = [
  { product: 'Desk', price: 200, active: true },
  { product: 'Chair', price: 100, active: true },
  { product: 'Door', price: 300, active: false },
  { product: 'Bookcase', price: 150, active: true },
  { product: 'Door', price: 100, active: true },
]
const resultElements = elements.filter((element) => element.price >= 150)

console.dir(resultElements)
/*
output:
Array [
  { product: 'Desk', price: 200, active: true },
  { product: 'Door', price: 300, active: false },
  { product: 'Bookcase', price: 150, active: true }
]
*/

const resultActiveElements = elements.filter(
  (element) => element.active && element.price >= 150
)
console.dir(resultActiveElements)
/*
output:
Array [
  { product: 'Desk', price: 200, active: true },
  { product: 'Bookcase', price: 150, active: true }
]
*/
