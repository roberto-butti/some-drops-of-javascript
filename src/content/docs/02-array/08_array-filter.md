---
title: "Filtering elements: `filter()`"
sidebar:
  label: Filtering elements
---

## Filtering elements: `filter()`

With the arrays, you have the `filter()` method to filter the elements of the array with a specific condition. For example with an array of numbers, you want to retrieve only the element greater than 50.
The `filter()` doesn't change the original array. It returns a new array with the elements that satisfy the condition.

```js
const numbers = [3, 75, 42, 13, 69]
const resultNumbers = numbers.filter(
    number => number >= 50
)
console.dir(resultNumbers)
// output: Array [ 75, 69 ]
```

If the element is an object you can filter for the attribute of the object. For example, if you have objects like this one:
```
{ product: 'Desk', price: 200, active: true }
```
and you have an array of elements, and you want to filter and retrieve the object with a price greater (or equal) than 150:

```js
const elements = [
  { product: 'Desk', price: 200, active: true },
  { product: 'Chair', price: 100, active: true },
  { product: 'Door', price: 300, active: false },
  { product: 'Bookcase', price: 150, active: true },
  { product: 'Door', price: 100, active: true }
]

const resultElements = elements.filter(
    element => element.price >= 150
)
console.dir(resultElements)
```

the result is:

```
Array [
  { product: 'Desk', price: 200, active: true },
  { product: 'Door', price: 300, active: false },
  { product: 'Bookcase', price: 150, active: true }
]
```

you can create a more complex conditions like:

```js
const resultActiveElements = elements.filter(
    element =>
    (element.active && element.price >= 150)
)
```

where the result is:

```
Array [
  { product: 'Desk', price: 200, active: true },
  { product: 'Bookcase', price: 150, active: true }
]
```