---
title: 'Finding the Last Element'
description: 'Returns the last element in the array that satisfies the provided testing function'
sidebar:
  label: Finding the Last Element
---

##  Finding the last element that passes a test: `findLast()`

The **`findLast()`** method of Array instances allows you to search through an array from the **end to the beginning**. It returns the value of the **first element** that satisfies the provided testing function (tha callback function). If no elements meet the criteria, `undefined` is returned.

### 🔍 **Syntax**

```js

array.findLast(callbackFn(element, index, array))
array.findLast(callbackFn(element, index, array), thisArg)

```

callbackFn: A function that is executed for each element in the array. It should return a truthy value to indicate a match and a falsy value otherwise. The function is called with the following arguments:

 - `element`: The current element being processed.
 - `index`: The index of the current element (_optional_).
 - `array`: The array `findLast()` was called upon (_optional_).

## 🌟 Examples

### Example 1: Using `findLast()` to find the last number greater than a specified value in an array:

```js

const numbers = [5, 12, 8, 130, 44];
const lastLargeNumber = numbers.findLast((element) => element > 10);
console.log(lastLargeNumber); // Expected output: 44

```

In the example above, the `findLast()` method is used to find the last number in the array that is greater than 10. It iterates through the array from right to left and returns the first element that meets the condition, which in this case is 44, the last element that is greater than 10.

#### Understanding the callback function

The callback function has one main parameter, `element`, which represents the current value being processed in the array during each iteration. Here’s how it works:

- As `findLast()` iterates over the array from the last element to the first, it passes each element of the array to the `element` parameter in the callback function.
- The condition in the callback function, `element > 10`, checks if the current element is greater than the specified value (10 in this case).
- The method stops as soon as it finds an element that satisfies the condition and returns that element. In this example, 44 is the last element in the array that is greater than 10.


#### Handling cases when no element matches the condition

If no element satisfies the condition, `findLast()` would return `undefined`.

```javascript
const numbers = [2, 4, 6, 8, 10];
const lastLargeNumber = numbers.findLast((element) => element > 20);
console.log(lastLargeNumber); // Expected output: undefined
```

In the example above, the `findLast()` method is used to find the last element in the array that is greater than 20. However, since none of the elements in the array `[2, 4, 6, 8, 10]` meet the condition `element > 20`, the method does not find any matching element.

When `findLast()` cannot find an element that satisfies the provided condition, it returns `undefined`. This is useful for safely handling cases where the array doesn't contain any values that match the specified criteria.

In real-world applications, you can use this behavior to handle scenarios where a condition might not be met, and return a fallback value or log a message if needed.

For example:

```javascript
if (lastLargeNumber === undefined) {
  console.log("No element found that matches the condition.");
}
```

This additional check can help ensure your code handles edge cases gracefully, preventing errors or unexpected behavior when no elements satisfy the condition.

### Example 2: finding the last occurrence of a specific element
```js
const fruits = [
  { name: 'apple', color: 'red' },
  { name: 'lemon', color: 'yellow' },
  { name: 'kiwi', color: 'green' },
  { name: 'banana', color: 'yellow' },
  { name: 'grape', color: 'purple' }
];

const lastYelloFruit = fruits.findLast((fruit) => fruit.color === 'yellow');
console.log(lastYellowFruit);
// Expected output: { name: 'banana', color: 'yellow' }

```

In this example, we have an array of fruit objects, where each object contains two properties: `name` (the type of fruit) and `color`. We want to find the last occurrence of the fruit with `yellow` color in the array.

- The callback function checks if the `color` property of the `fruit` object is `'yellow'`.
- The `findLast()` method starts searching from the end of the array and returns the last object where the `color` is `'yellow'`.
- In this case, the last matched occurrence is `{ name: 'banana', color: 'yellow' }`.

Here, `findLast()` helps us locate the last occurrence of yellow fruit in the array, returning the expected object.



### Example 3: finding the last even number

```js
const mixedNumbers = [3, 5, 7, 10, 12, 15, 20];
const lastEvenNumber = mixedNumbers.findLast((num) => num % 2 === 0);
console.log(lastEvenNumber); // Expected output: 20

```

## ⚠️ Important Notes
1. Executes the provided function once for each element of the array, in descending order.
2. Returns undefined if no element satisfies the testing function.
3. Does not modify the original array, ensuring immutability.
4. Returns the value of the first element that satisfies the provided testing function.

## 🔗 Conclusion
The `findLast()` method is a valuable tool for efficiently locating the last matching element in an array, making your code more readable and maintainable!