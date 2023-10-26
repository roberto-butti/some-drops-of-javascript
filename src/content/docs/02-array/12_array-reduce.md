---
title: 'Reducing an Array: `reduce()`'
sidebar:
  label: Reducing Array
---

## Reducing an Array: `reduce()`

The `reduce()` method is a powerful array method in JavaScript used to reduce an array into a single value. It iterates over each element of the array and applies a callback function to accumulate a result. <br/>The `reduce()` function takes two main arguments: the `callback function` and an `initial value` (also known as an accumulator). <br/>The callback function is called for each element in the array and is responsible for accumulating the result. The result is then carried over to the next iteration. The `final result` is returned after iterating through all the array elements.

```js
//Syntax
reduce(callbackFn)
reduce(callbackFn, initialValue)

callbackFn(accumulator, currentValue, currentIndex, array)
```

`callbackFn`: A function that is called for each element in the array. It takes four arguments:<br/>
  &emsp;&emsp;`accumulator`: The accumulated result from previous iterations or the initial &emsp;&emsp;value.<br/>
  &emsp;&emsp;`currentValue`: The current element being processed in the array.<br/>
  &emsp;&emsp;`currentIndex`: (Optional) The index of the current element being processed.<br/>
  &emsp;&emsp;`array`: (Optional) The array reduce() was called upon.<br/><br/>
`initialValue`: (Optional) The initial value for the accumulator. If not provided, the first element of the array is used as the initial value.

### Examples

<b>Let's use reduce() to find the sum of all elements in an array:</b>
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
<b>Counting the number of occurrences of elements in an array using reduce():</b>
```js
const fruits = ['apple', 'banana', 'orange', 'apple', 'banana', 'apple']

const fruitCounter = fruits.reduce((accumulator, currentFruit) => {
  accumulator[currentFruit] = (accumulator[currentFruit] || 0) + 1
  return accumulator
}, {})

console.log('Occurrences:', fruitCounter)
// Output: Occurrences: { apple: 3, banana: 2, orange: 1 }
```