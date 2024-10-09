---
title: 'Grouping array elements'
description: 'Groups elements of an array based on a function, returning an object'
sidebar:
  label: Grouping elements
---


## Introduction
The `Object.groupBy()` method is used to group elements of an array based on a given function. It returns an object where the keys are the result of the grouping function, and the values are arrays containing the elements that correspond to each key.

## Syntax
```javascript
Object.groupBy(array, callbackFn)
```

### Parameters
- `array`: The array of elements you want to group.
- `callbackFn`: A function that accepts up to three arguments. The `groupBy()` method calls the `callbackFn` function once for each element in the array.

### Return value
An object where each key is the result of the `callbackFn` function, and the corresponding value is an array of elements from the original array that produced that result.

## Description
The `groupBy()` method executes the provided `callbackFn` function once for each element in the array. It then groups the array elements according to the returned values from the `callbackFn`.

## Examples

### Example 1: grouping fruits by type

``` javascript
const fruits = [
  { name: 'Apple', type: 'Citrus', quantity: 15 },
  { name: 'Banana', type: 'Tropical', quantity: 10 },
  { name: 'Orange', type: 'Citrus', quantity: 8 },
  { name: 'Mango', type: 'Tropical', quantity: 5 },
  { name: 'Lemon', type: 'Citrus', quantity: 12 }
];

const groupedByType = Object.groupBy(fruits, fruit => fruit.type);
console.log(groupedByType);
/*
{
  Citrus: [
    { name: 'Apple', type: 'Citrus', quantity: 15 },
    { name: 'Orange', type: 'Citrus', quantity: 8 },
    { name: 'Lemon', type: 'Citrus', quantity: 12 }
  ],
  Tropical: [
    { name: 'Banana', type: 'Tropical', quantity: 10 },
    { name: 'Mango', type: 'Tropical', quantity: 5 }
  ]
}
*/
```

In this example, `Object.groupBy()` groups the fruits by their type into two categories: 'Citrus' and 'Tropical'. Each key in the resulting object is the fruit type, and the values are arrays of fruit objects with that type.

### Example 2: Grouping fruits by quantity range

```javascript
const fruits = [
  { name: 'Apple', type: 'Citrus', quantity: 15 },
  { name: 'Banana', type: 'Tropical', quantity: 10 },
  { name: 'Orange', type: 'Citrus', quantity: 8 },
  { name: 'Mango', type: 'Tropical', quantity: 5 },
  { name: 'Lemon', type: 'Citrus', quantity: 12 }
];

const groupedByQuantityRange = Object.groupBy(fruits, fruit => {
  if (fruit.quantity < 10) return 'Low';
  if (fruit.quantity < 15) return 'Medium';
  return 'High';
});

console.log(groupedByQuantityRange);
/*
{
  Low: [
    { name: 'Orange', type: 'Citrus', quantity: 8 },
    { name: 'Mango', type: 'Tropical', quantity: 5 }
  ],
  Medium: [
    { name: 'Banana', type: 'Tropical', quantity: 10 },
    { name: 'Lemon', type: 'Citrus', quantity: 12 }
  ],
  High: [
    { name: 'Apple', type: 'Citrus', quantity: 15 }
  ]
}
*/
```

This example groups fruits by their quantity into three ranges: 'Low' (less than 10), 'Medium' (between 10 and 14), and 'High' (15 or more). The result is an object where each key corresponds to a quantity range, and the values are arrays of fruits in that range.

### Example 3: grouping fruits by the length of the name

```javascript
const fruits = [
  { name: 'Apple', type: 'Citrus', quantity: 15 },
  { name: 'Banana', type: 'Tropical', quantity: 10 },
  { name: 'Orange', type: 'Citrus', quantity: 8 },
  { name: 'Mango', type: 'Tropical', quantity: 5 },
  { name: 'Lemon', type: 'Citrus', quantity: 12 }
];

const groupedByNameLength = Object.groupBy(fruits, fruit => fruit.name.length);
console.log(groupedByNameLength);
/*
{
  5: [
    { name: 'Apple', type: 'Citrus', quantity: 15 },
    { name: 'Mango', type: 'Tropical', quantity: 5 },
    { name: 'Lemon', type: 'Citrus', quantity: 12 }
  ],
  6: [
    { name: 'Banana', type: 'Tropical', quantity: 10 },
    { name: 'Orange', type: 'Citrus', quantity: 8 }
  ]
}
*/

```

 In this case, fruits are grouped based on the length of their name property. The result is an object where the keys represent the number of characters in the fruit's name (5 for 'Apple', 'Mango', and 'Lemon'; 6 for 'Banana' and 'Orange'), and the values are arrays of fruits that fall into each length category.


### Summary of the use cases
- Grouping by type: Organizes items based on a predefined category or classification.
- Grouping by quantity range: Segments data by numeric values, useful when you need to classify items into ranges (e.g., "low", "medium", "high").
- Grouping by name length: Categorizes based on string properties, ideal for text analysis or string manipulation tasks.

## Notes
- The `groupBy()` method is a relatively new addition to JavaScript and may not be supported in all environments. Check for compatibility before using it in production.
- If you need to support older environments, you can achieve similar functionality using `reduce()` or other array methods.

## See also
- [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [Object.groupBy()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy)
