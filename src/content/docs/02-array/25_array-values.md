---
title: "Getting array values as an iterator"
sidebar:
  label: Array values
---

## Array values: `Array.values()`

The **values()** method in JavaScript returns a new Array Iterator object that contains the values for each index in the array.

Syntax:
```javascript
array.values()
```

### Parameters:

The `values()` method doesn't take any parameters.

### Return Value:

The `values()` method returns a new Array Iterator object that contains the values for each index in the array.

### Examples:

#### Basic Usage:

```javascript
const fruits = ['Apple', 'Banana', 'Orange'];
const iterator = fruits.values();

for (const value of iterator) {
  console.log(value);
}
// Output:
// "Apple"
// "Banana"
// "Orange"
```

In this example, the `values()` method returns an iterator that provides the values of the array elements, which are then accessed using a for...of loop.

#### Converting Iterator to Array:

```javascript
const numbers = [1, 2, 3, 4, 5];
const iterator = numbers.values();
const valuesArray = [...iterator];

console.log(valuesArray); // Output: [1, 2, 3, 4, 5]
```

Here, the spread operator (`...`) is used to convert the iterator returned by `values()` into a new array.

#### Using with Iterator Methods:

```javascript
const colors = ['red', 'green', 'blue'];
const iterator = colors.values();

console.log(iterator.next().value); // Output: "red"
console.log(iterator.next().value); // Output: "green"
console.log(iterator.next().value); // Output: "blue"
console.log(iterator.next().done);  // Output: true
```

The iterator object has a `next()` method that returns the next value in the sequence along with a `done` property that indicates whether the iteration is complete.

#### Iterating Over Sparse Arrays:

```javascript
const sparseArray = [1, , 3, , 5];
const iterator = sparseArray.values();

for (const value of iterator) {
  console.log(value);
}
// Output:
// 1
// undefined
// 3
// undefined
// 5
```

When used with sparse arrays, the `values()` method includes `undefined` for missing elements.

### Common Use Cases:

1. **Iterating Over Array Values**:

```javascript
function processArrayValues(array) {
  const iterator = array.values();
  for (const value of iterator) {
    // Process each value
    console.log(`Processing: ${value}`);
  }
}

processArrayValues(['a', 'b', 'c']);
// Output:
// "Processing: a"
// "Processing: b"
// "Processing: c"
```

2. **Creating Multiple Independent Iterators**:

```javascript
const data = [10, 20, 30];
const iterator1 = data.values();
const iterator2 = data.values();

console.log(iterator1.next().value); // Output: 10
console.log(iterator1.next().value); // Output: 20

console.log(iterator2.next().value); // Output: 10 (independent iterator)
```

3. **Working with Other Iteration Methods**:

```javascript
const items = ['item1', 'item2', 'item3'];
const iterator = items.values();

// Convert to array and apply array methods
const upperCaseItems = [...iterator].map(item => item.toUpperCase());
console.log(upperCaseItems); // Output: ["ITEM1", "ITEM2", "ITEM3"]
```

### Comparison with Other Array Iterator Methods:

JavaScript arrays provide three methods that return iterators:

```javascript
const arr = ['a', 'b', 'c'];

// values() - returns values
const valueIterator = arr.values();
// Output when iterated: "a", "b", "c"

// keys() - returns indices
const keyIterator = arr.keys();
// Output when iterated: 0, 1, 2

// entries() - returns [index, value] pairs
const entryIterator = arr.entries();
// Output when iterated: [0, "a"], [1, "b"], [2, "c"]
```

By using the `Array.values()` method, you can efficiently iterate over the values of an array, which is particularly useful when you need to process each element in sequence without needing their indices. 