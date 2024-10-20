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

const user = {
    name: 'John',
    age: 30
}
console.log(Object.entries(user)); // [['name', 'John'], ['age', 30]]

const mapping = new Map();
mapping.set("0", "Peach");
mapping.set(1, "Mango");
mapping.set({}, "Banana");

const mapIter = mapping.entries();

console.log(mapIter.next().value); // ["0", "Peach"]
console.log(mapIter.next().value); // [1, "Mango"]
console.log(mapIter.next().value); // [Object, "Banana"]