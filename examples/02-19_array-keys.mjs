const fruit = ['watermelon', 'pineapple', 'pear', 'mango']
const fruitKeys = fruit.keys()

for (let key of fruitKeys) {
  console.log(key)
}

// Output:
// 0
// 1
// 2
// 3

// with sparse arrays

const animal = ['dog', , 'cat']

for (let key of animal.keys()) {
  console.log(`Animal at index ${key} is ${animal[key]}`)
}

// Output:
// Animal at index 0 is dog
// Animal at index 1 is undefined
// Animal at index 2 is cat
