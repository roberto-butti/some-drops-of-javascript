---
title: 'Instances an Array iterator: `entries()`'
sidebar:
  label: Instances an Array iterator
---

## Instances an Array iterator: `entries()`

The `entries()` method in JavaScript instances an iterator object that contains the key/value pairs for each index in the array.

An iterator is a special object that allows you to "navigate" through the elements of the array. It does not directly return an array with all index/value pairs.

It has no input parameters and the syntax is as follows::

```javascript
array.entries()
```

### Example: basic iteration with index and element
When using `entries()` method with `for` loop, it's possible manipulate the index and the item, like this:.

```javascript
const fruits = ["Banana", "Apple", "Mango"];

for (const [index, fruit] of fruits.entries()) {
  console.log(index, fruit);
}

// 0 'Banana'
// 1 'Apple'
// 2 'Mango'
```

In this case, the `entries()` method on the `fruits` array is used and then the `for` loop is used JavaScript Destructuring.

### Example: using a for...of loop

Another example, it's possible iterate an entries Array with for...of loop, in this way:  
```js
const fruits = ["Banana", "Apple", "Mango"];
const fruitsEntries = fruits.entries();

for (const fruit of fruitsEntries) {
  console.log(fruit);
}

// 0 'Banana'
// 1 'Apple'
// 2 'Mango'
```
In the above example, the `entries()` method on the `fruits` array is used for memorize the result in a variable called `fruitsEntries` which is then used in the `for` loop.

### Example: sparse arrays

`entries()` method will visit empty slots and will consider it as `undefined`, in this way:

```js
for (const fruit of [, "Banana"].entries()) {
  console.log(fruit);
}
// [0, undefined]
// [1, 'Banana']
```
In this example, first index is empty and for `entries()` method the element is `undefined`.

### The `next()` method 

After the iterator is created with `entries()` method, it possible access the `next()` method.
With this method is possible access each element one at a time, in this way:
```js
const fruits = ["Banana", "Apple", "Mango"];
const fruitsEntries = fruits.entries();

console.log(fruitsEntries.next().value + " " + fruitsEntries.next().value);
// "0,Banana 1,Apple"
```
In the above example, `next()` is called twice, this using the first two values of `fruitsEntries`.

### Notes

- **Return on object**: `entries()` method return an iterator object that contains the key/value.
- **Access each element**: `next()` method allows the access to elements one at a time.
