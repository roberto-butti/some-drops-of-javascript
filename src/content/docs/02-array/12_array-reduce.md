---
title: 'Reducing an Array'
sidebar:
  label: Reducing Array
---

## Reducing an Array: `reduce()`

The `reduce()` method is a powerful array method in JavaScript used to reduce an array into a single value. It iterates over each element of the array and applies a callback function to accumulate a result.

The `reduce()` function takes two main arguments: the callback function and an (_optional_) initial value.

The callback function is called for each element in the array and is responsible for accumulating the result. The result is then carried over to the next iteration. The final result is returned after iterating through all the array elements.

```js
//Syntax
reduce(callbackFn)
reduce(callbackFn, initialValue)

callbackFn(accumulator, currentValue, currentIndex, array)
```

- `callbackFn`: A function that is called for each element in the array. It takes four arguments:
  - `accumulator`: The accumulated result from previous iterations or the initial value.
  - `currentValue`: The current element being processed in the array.
  - `currentIndex`: (Optional) The index of the current element being processed.
  - `array`: (Optional) The array reduce() was called upon.

- `initialValue`: (Optional) The initial value for the accumulator. If not provided, the first element of the array is used as the initial value.

### Examples

_Example 1_, let's use the `reduce()` to find the sum of all elements in an array:

```js
const numbers = [1, 2, 3, 4, 5]

const sumWithInitialValue = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 0) //Here 0 is an initial value to the accumulator

/* Here if we do not mention initialValue '0', then initial value of accumulator will be first array value
and the currentValue will be second value of Array. */
const sumWithoutInitialValue = numbers.reduce((acc, curr) => {
  return acc + curr
})

console.log('SumWithInitialValue:', sumWithInitialValue)
console.log('SumWithoutInitialValue:', sumWithoutInitialValue)
```

_Example 2_, counting the number of occurrences of elements in an array using `reduce()`:

```js
const fruits = ['🍎', '🍓', '🍋', '🍎', '🍋', '🍎']

const fruitCounter = fruits.reduce((accumulator, currentFruit) => {
  accumulator[currentFruit] = (accumulator[currentFruit] || 0) + 1
  return accumulator
}, {})

console.log('Occurrences:', fruitCounter)
// Output: Occurrences: {
  "🍎": 3,
  "🍓": 1,
  "🍋": 2
}
```
