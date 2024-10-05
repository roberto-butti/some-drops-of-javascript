---
title: 'Finding the Last Element'
description: 'Returns the last element in the array that satisfies the provided testing function'
sidebar:
  label: Finding the Last Element
---

## 🕵️‍♂️ Finding the Last Element That Passes a Test: `findLast()`

The **`findLast()`** method of Array instances allows you to search through an array from the **end to the beginning**. It returns the value of the **first element** that satisfies the provided testing function. If no elements meet the criteria, `undefined` is returned.

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
Example 1: Finding the Last Large Number

```js

const numbers = [5, 12, 8, 130, 44];
const lastLargeNumber = numbers.findLast((element) => element > 10);
console.log(lastLargeNumber); // Expected output: 44

```

In this example, `findLast()` is utilized to find the last number in the array that is greater than 10. It returns 44, the last element satisfying the condition.

Example 2: Finding the Last Occurrence of a Specific Element
```js
const fruits = ['apple', 'banana', 'kiwi', 'banana', 'grape'];
const lastBanana = fruits.findLast((fruit) => fruit === 'banana');
console.log(lastBanana); // Expected output: banana
```

Here, `findLast()` helps us locate the last occurrence of 'banana' in the array, returning the expected value of 'banana'.

Example 3: Finding the Last Even Number

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