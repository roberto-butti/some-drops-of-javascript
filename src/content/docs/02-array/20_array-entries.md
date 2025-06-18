---
title: "Getting key-value pairs from an array"
sidebar:
  label: Array entries
---

## Array entries: `Array.entries()`

The **entries()** method in JavaScript returns a new Array Iterator object that contains key-value pairs for each index in the array. Each key-value pair is an array where the first element is the index and the second element is the value.

Syntax:
```javascript
array.entries()
```

### Parameters:

The `entries()` method doesn't take any parameters.

### Return Value:

The `entries()` method returns a new Array Iterator object that contains key-value pairs for each index in the array.

### Examples:

#### Basic Usage:

```javascript
const fruits = ['Apple', 'Banana', 'Orange'];
const iterator = fruits.entries();

for (const entry of iterator) {
  console.log(entry);
}
// Output:
// [0, "Apple"]
// [1, "Banana"]
// [2, "Orange"]
```

In this example, the `entries()` method returns an iterator that provides key-value pairs (index-value pairs) of the array elements, which are then accessed using a for...of loop.

#### Destructuring in Loop:

```javascript
const colors = ['red', 'green', 'blue'];
const iterator = colors.entries();

for (const [index, value] of iterator) {
  console.log(`${index}: ${value}`);
}
// Output:
// "0: red"
// "1: green"
// "2: blue"
```

Using array destructuring, we can directly access the index and value from each entry.

#### Converting Iterator to Array:

```javascript
const numbers = [1, 2, 3, 4, 5];
const iterator = numbers.entries();
const entriesArray = [...iterator];

console.log(entriesArray);
// Output: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]]
```

Here, the spread operator (`...`) is used to convert the iterator returned by `entries()` into a new array of arrays.

#### Using with Iterator Methods:

```javascript
const letters = ['a', 'b', 'c'];
const iterator = letters.entries();

console.log(iterator.next().value); // Output: [0, "a"]
console.log(iterator.next().value); // Output: [1, "b"]
console.log(iterator.next().value); // Output: [2, "c"]
console.log(iterator.next().done);  // Output: true
```

The iterator object has a `next()` method that returns the next value in the sequence along with a `done` property that indicates whether the iteration is complete.

### Common Use Cases:

1. **Creating a Map from an Array**:

```javascript
function arrayToMap(array) {
  const map = new Map();
  for (const [index, value] of array.entries()) {
    map.set(index, value);
  }
  return map;
}

const fruits = ['Apple', 'Banana', 'Orange'];
const fruitsMap = arrayToMap(fruits);
console.log(fruitsMap.get(1)); // Output: "Banana"
```

2. **Filtering with Index Awareness**:

```javascript
function filterWithIndex(array, callback) {
  const result = [];
  for (const [index, value] of array.entries()) {
    if (callback(value, index)) {
      result.push(value);
    }
  }
  return result;
}

const numbers = [10, 20, 30, 40, 50];
const filteredNumbers = filterWithIndex(numbers, (value, index) => index % 2 === 0);
console.log(filteredNumbers); // Output: [10, 30, 50]
```

3. **Creating an Object with Array Indices as Keys**:

```javascript
function arrayToObject(array) {
  return Object.fromEntries(array.entries());
}

const fruits = ['Apple', 'Banana', 'Orange'];
const fruitsObject = arrayToObject(fruits);
console.log(fruitsObject);
// Output: { 0: "Apple", 1: "Banana", 2: "Orange" }
```

### Comparison with Other Array Iterator Methods:

JavaScript arrays provide three methods that return iterators:

```javascript
const arr = ['a', 'b', 'c'];

// entries() - returns [index, value] pairs
const entryIterator = arr.entries();
// Output when iterated: [0, "a"], [1, "b"], [2, "c"]

// keys() - returns indices
const keyIterator = arr.keys();
// Output when iterated: 0, 1, 2

// values() - returns values
const valueIterator = arr.values();
// Output when iterated: "a", "b", "c"
```

By using the `Array.entries()` method, you can efficiently iterate over both the indices and values of an array, which is particularly useful when you need to process elements while keeping track of their positions in the array. 