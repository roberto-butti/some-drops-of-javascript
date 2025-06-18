---
title: "Sorting array elements"
sidebar:
  label: Array sort
---

## Array sort: `Array.sort()`

The **sort()** method in JavaScript sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings and comparing their sequences of UTF-16 code units values.

Syntax:
```javascript
array.sort()
array.sort(compareFn)
```

### Parameters:

1. **compareFn (optional)**: A function that defines the sort order. If omitted, the array elements are converted to strings and sorted according to each character's Unicode code point value.
   - If `compareFn(a, b)` returns less than 0, sort `a` before `b`.
   - If `compareFn(a, b)` returns 0, leave `a` and `b` unchanged with respect to each other.
   - If `compareFn(a, b)` returns greater than 0, sort `b` before `a`.

### Return Value:

The `sort()` method returns the reference to the same array, now sorted. Note that the array is sorted in place, and no copy is made.

### Examples:

#### Basic Usage:

```javascript
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.sort();
console.log(fruits); // Output: ["Apple", "Banana", "Mango", "Orange"]
```

In this example, the `sort()` method sorts the array of strings alphabetically.

#### Sorting Numbers:

```javascript
const numbers = [40, 100, 1, 5, 25, 10];
numbers.sort();
console.log(numbers); // Output: [1, 10, 100, 25, 40, 5]
```

Note that without a compare function, numbers are converted to strings and sorted lexicographically, which may not give the expected result.

#### Using a Compare Function for Numbers:

```javascript
const numbers = [40, 100, 1, 5, 25, 10];
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [1, 5, 10, 25, 40, 100]
```

With a compare function, we can sort numbers in ascending order.

#### Sorting in Descending Order:

```javascript
const numbers = [40, 100, 1, 5, 25, 10];
numbers.sort((a, b) => b - a);
console.log(numbers); // Output: [100, 40, 25, 10, 5, 1]
```

By reversing the comparison, we can sort in descending order.

### Common Use Cases:

1. **Sorting Objects by Property**:

```javascript
const people = [
  { name: 'John', age: 30 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 }
];

// Sort by age
people.sort((a, b) => a.age - b.age);
console.log(people);
// Output: [
//   { name: 'Alice', age: 25 },
//   { name: 'John', age: 30 },
//   { name: 'Bob', age: 35 }
// ]

// Sort by name
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);
// Output: [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 35 },
//   { name: 'John', age: 30 }
// ]
```

2. **Case-Insensitive Sorting**:

```javascript
const cities = ['Vienna', 'berlin', 'Amsterdam', 'paris'];
cities.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(cities); // Output: ["Amsterdam", "berlin", "paris", "Vienna"]
```

3. **Custom Sorting Logic**:

```javascript
const items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

// Sort by value, then by name if values are equal
items.sort((a, b) => {
  if (a.value !== b.value) {
    return a.value - b.value;
  }
  return a.name.localeCompare(b.name);
});
console.log(items);
```

### Sorting with Internationalization:

For proper internationalization support, you can use the `Intl.Collator` object:

```javascript
const names = ['Österreich', 'Andorra', 'Vietnam', 'Zaire', 'Åland'];
const collator = new Intl.Collator('en');
names.sort((a, b) => collator.compare(a, b));
console.log(names); // Output: ["Åland", "Andorra", "Österreich", "Vietnam", "Zaire"]
```

### Stability of sort():

The `sort()` method in modern JavaScript is stable, which means that elements with equal sorting keys maintain their relative order:

```javascript
const data = [
  { id: 1, value: 'a' },
  { id: 2, value: 'b' },
  { id: 3, value: 'a' },
  { id: 4, value: 'c' }
];

// Sort by value
data.sort((a, b) => a.value.localeCompare(b.value));
console.log(data);
// Output: The elements with value 'a' maintain their relative order (id 1 before id 3)
```

By using the `Array.sort()` method effectively with custom compare functions, you can implement complex sorting logic to organize your data according to your specific requirements. 