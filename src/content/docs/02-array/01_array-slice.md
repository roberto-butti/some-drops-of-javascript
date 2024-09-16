# Array.prototype.slice()

## Description

The `slice()` method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).

## Syntax

```javascript
array.slice(start, end);

Parameters

-* start: (optional) The zero-based index at which to begin extraction. If start is greater than or equal to the length of the array, an empty array will be returned. If start is negative, it will count back from the end of the array.

-* end: (optional) The zero-based index before which to end extraction. If end is omitted, slice() extracts through the end of the array. If end is greater than the length of the array, it will be treated as the length of the array. If end is negative, it will count back from the end of the array.

Return Value
Returns a shallow copy of a portion of the array into a new array object.

Example

const fruits = ['Apple', 'Banana', 'Cherry', 'Berries'];
const citrus = fruits.slice(1, 3);
console.log(citrus); // Output: ['Banana', 'Cherry']

The `slice()` method is supported in all major browsers .

Related Methods

Array.prototype.splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
Array.prototype.concat(): Used to merge two or more arrays.
```
