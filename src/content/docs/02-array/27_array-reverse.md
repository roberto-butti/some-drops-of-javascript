---
title: "Reversing array elements"
sidebar:
  label: Array reverse
---

## Array reverse: `Array.reverse()`

The **reverse()** method in JavaScript reverses the order of the elements in an array in place and returns the reference to the same array.

Syntax:
```javascript
array.reverse()
```

### Parameters:

The `reverse()` method doesn't take any parameters.

### Return Value:

The `reverse()` method returns the reference to the same array, now with elements in reversed order. Note that the array is reversed in place, and no copy is made.

### Examples:

#### Basic Usage:

```javascript
const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
fruits.reverse();
console.log(fruits); // Output: ["Mango", "Orange", "Banana", "Apple"]
```

In this example, the `reverse()` method reverses the order of the elements in the array.

#### Reversing a Numeric Array:

```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // Output: [5, 4, 3, 2, 1]
```

The `reverse()` method works with any type of array elements.

#### Chaining with Other Array Methods:

```javascript
const numbers = [1, 2, 3, 4, 5];
const reversed = [...numbers].reverse();
console.log(numbers); // Output: [1, 2, 3, 4, 5] (original array unchanged)
console.log(reversed); // Output: [5, 4, 3, 2, 1] (new reversed array)
```

By using the spread operator (`...`) to create a copy first, we can reverse an array without modifying the original.

#### Reversing a String Using Array Methods:

```javascript
const str = 'Hello World';
const reversedStr = str.split('').reverse().join('');
console.log(reversedStr); // Output: "dlroW olleH"
```

While strings don't have a `reverse()` method, we can convert a string to an array, reverse it, and then join it back into a string.

### Common Use Cases:

1. **Reversing a Copy of an Array**:

```javascript
function reverseArrayCopy(array) {
  return [...array].reverse();
}

const original = [1, 2, 3, 4, 5];
const reversed = reverseArrayCopy(original);
console.log(original); // Output: [1, 2, 3, 4, 5]
console.log(reversed); // Output: [5, 4, 3, 2, 1]
```

2. **Implementing a Palindrome Check**:

```javascript
function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  // Compare with its reverse
  return cleanStr === cleanStr.split('').reverse().join('');
}

console.log(isPalindrome('A man, a plan, a canal: Panama')); // Output: true
console.log(isPalindrome('race a car')); // Output: false
```

3. **Creating a Reverse Iterator**:

```javascript
function* reverseIterator(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    yield array[i];
  }
}

const array = ['a', 'b', 'c', 'd'];
for (const item of reverseIterator(array)) {
  console.log(item);
}
// Output:
// "d"
// "c"
// "b"
// "a"
```

### Reversing Nested Arrays:

The `reverse()` method only affects the order of elements in the top level of the array. Nested arrays remain intact:

```javascript
const nestedArray = [[1, 2], [3, 4], [5, 6]];
nestedArray.reverse();
console.log(nestedArray); // Output: [[5, 6], [3, 4], [1, 2]]
```

To reverse nested arrays as well, you would need to apply `reverse()` to each nested array:

```javascript
const deepReversed = nestedArray.map(subArray => subArray.reverse()).reverse();
console.log(deepReversed); // Output: [[6, 5], [4, 3], [2, 1]]
```

### Performance Considerations:

The `reverse()` method is efficient with a time complexity of O(n), where n is the length of the array. Since it operates in place, it doesn't require additional memory for a new array.

By using the `Array.reverse()` method, you can quickly and efficiently reverse the order of elements in an array, which is useful for many algorithms and data manipulations. 