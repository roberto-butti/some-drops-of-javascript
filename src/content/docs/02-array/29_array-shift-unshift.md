---
title: "Adding and removing elements from the beginning of an array"
sidebar:
  label: Array shift and unshift
---

## Array shift and unshift: `Array.shift()` and `Array.unshift()`

The **shift()** and **unshift()** methods in JavaScript are used to remove and add elements from the beginning of an array, respectively. These methods are commonly used for implementing queue-like behavior in arrays.

### Array.shift()

The `shift()` method removes the first element from an array and returns that element. This method changes the length of the array.

Syntax:
```javascript
array.shift()
```

#### Parameters:

The `shift()` method doesn't take any parameters.

#### Return Value:

The `shift()` method returns the removed element from the array. If the array is empty, `undefined` is returned.

### Array.unshift()

The `unshift()` method adds one or more elements to the beginning of an array and returns the new length of the array.

Syntax:
```javascript
array.unshift(element1, element2, ..., elementN)
```

#### Parameters:

1. **element1, element2, ..., elementN**: The elements to add to the beginning of the array.

#### Return Value:

The `unshift()` method returns the new length of the array after the elements have been added.

### Examples:

#### Basic Usage of shift():

```javascript
const fruits = ['Apple', 'Banana', 'Orange'];
const removedItem = fruits.shift();

console.log(fruits); // Output: ["Banana", "Orange"]
console.log(removedItem); // Output: "Apple"
```

In this example, the `shift()` method removes 'Apple' from the beginning of the array and returns it.

#### Shifting from an Empty Array:

```javascript
const emptyArray = [];
const removedItem = emptyArray.shift();

console.log(emptyArray); // Output: []
console.log(removedItem); // Output: undefined
```

When shifting from an empty array, `undefined` is returned.

#### Basic Usage of unshift():

```javascript
const fruits = ['Banana', 'Orange'];
const newLength = fruits.unshift('Apple');

console.log(fruits); // Output: ["Apple", "Banana", "Orange"]
console.log(newLength); // Output: 3
```

In this example, the `unshift()` method adds 'Apple' to the beginning of the array and returns the new length of the array.

#### Adding Multiple Elements with unshift():

```javascript
const numbers = [3, 4, 5];
const newLength = numbers.unshift(1, 2);

console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(newLength); // Output: 5
```

The `unshift()` method can add multiple elements at once.

### Common Use Cases:

1. **Implementing a Queue Data Structure**:

```javascript
class Queue {
  constructor() {
    this.items = [];
  }
  
  enqueue(element) {
    return this.items.push(element);
  }
  
  dequeue() {
    if (this.items.length === 0) {
      return "Underflow";
    }
    return this.items.shift();
  }
  
  front() {
    if (this.items.length === 0) {
      return "No elements in Queue";
    }
    return this.items[0];
  }
  
  isEmpty() {
    return this.items.length === 0;
  }
  
  size() {
    return this.items.length;
  }
  
  clear() {
    this.items = [];
  }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.front()); // Output: 10
console.log(queue.dequeue()); // Output: 10
console.log(queue.size()); // Output: 2
```

2. **Processing Tasks in Order**:

```javascript
const taskQueue = [];

// Add tasks to the queue
taskQueue.push('Task 1');
taskQueue.push('Task 2');
taskQueue.push('Task 3');

console.log('Current queue:', taskQueue); // Output: ["Task 1", "Task 2", "Task 3"]

// Process tasks in a FIFO (First In, First Out) order
while (taskQueue.length > 0) {
  const currentTask = taskQueue.shift();
  console.log('Processing:', currentTask);
}

// Output:
// Processing: Task 1
// Processing: Task 2
// Processing: Task 3
```

3. **Maintaining a Sliding Window**:

```javascript
function slidingWindow(arr, windowSize) {
  const result = [];
  const window = [];
  
  for (let i = 0; i < arr.length; i++) {
    window.push(arr[i]); // Add new element
    
    // If window is full, process it
    if (window.length === windowSize) {
      result.push([...window]); // Store current window
      window.shift(); // Remove oldest element
    }
  }
  
  return result;
}

const data = [1, 2, 3, 4, 5, 6, 7];
console.log(slidingWindow(data, 3));
// Output: [[1, 2, 3], [2, 3, 4], [3, 4, 5], [4, 5, 6], [5, 6, 7]]
```

### Performance Considerations:

Unlike `push()` and `pop()`, the `shift()` and `unshift()` methods have a time complexity of O(n), where n is the length of the array. This is because all elements in the array need to be reindexed when an element is added to or removed from the beginning of the array.

For large arrays, if you need to frequently add or remove elements from the beginning, consider using a more efficient data structure like a linked list or a specialized queue implementation.

By using the `Array.shift()` and `Array.unshift()` methods together, you can efficiently implement queue-like data structures and algorithms in JavaScript, but be mindful of the performance implications for large arrays. 