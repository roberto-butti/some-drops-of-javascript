const fruits = ['Banana', 'Apple', 'Mango']
const fruitsEntries = fruits.entries()

for (const [index, fruit] of fruits.entries()) {
  console.log(index, fruit)
}

for (const fruit of fruitsEntries) {
  console.log(fruit)
}
// 0 'Banana'
// 1 'Apple'
// 2 'Mango'

for (const fruit of [, "Banana"].entries()) {
  console.log(fruit)
}
// [0, undefined]
// [1, 'Banana']

console.log(fruitsEntries.next().value + " " + fruitsEntries.next().value);
// "0,Banana 1,Apple"