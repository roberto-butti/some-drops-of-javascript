---
title: "Adding and removing elements from the end of an array"
sidebar:
  label: Array push and pop
---

## Array push and pop: `Array.push()` and `Array.pop()`

The **push()** and **pop()** methods in JavaScript are used to add and remove elements from the end of an array, respectively. These methods are commonly used for implementing stack-like behavior in arrays.

### Array.push()

The `push()` method adds one or more elements to the end of an array and returns the new length of the array.

Syntax:
```javascript
array.push(element1, element2, ..., elementN)
```

#### Parameters:

1. **element1, element2, ..., elementN**: The elements to add to the end of the array.

#### Return Value:

The `push()` method returns the new length of the array after the elements have been added.

### Array.pop()

The `pop()` method removes the last element from an array and returns that element.

Syntax:
```javascript
array.pop()
```

#### Parameters:

The `pop()` method doesn't take any parameters.

#### Return Value:

The `pop()` method returns the removed element from the array. If the array is empty, `undefined` is returned.

### Examples:

#### Basic Usage of push():

```javascript
const fruits = ['Apple', 'Banana'];
const newLength = fruits.push('Orange');

console.log(fruits); // Output: ["Apple", "Banana", "Orange"]
console.log(newLength); // Output: 3
```

In this example, the `push()` method adds 'Orange' to the end of the array and returns the new length of the array.

#### Adding Multiple Elements with push():

```javascript
const numbers = [1, 2];
const newLength = numbers.push(3, 4, 5);

console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(newLength); // Output: 5
```

The `push()` method can add multiple elements at once.

#### Basic Usage of pop():

```javascript
const fruits = ['Apple', 'Banana', 'Orange'];
const removedItem = fruits.pop();

console.log(fruits); // Output: ["Apple", "Banana"]
console.log(removedItem); // Output: "Orange"
```

In this example, the `pop()` method removes 'Orange' from the end of the array and returns it.

#### Popping from an Empty Array:

```javascript
const emptyArray = [];
const removedItem = emptyArray.pop();

console.log(emptyArray); // Output: []
console.log(removedItem); // Output: undefined
```

When popping from an empty array, `undefined` is returned.

### Common Use Cases:

1. **Implementing a Stack Data Structure**:

```javascript
class Stack {
  constructor() {
    this.items = [];
  }
  
  push(element) {
    return this.items.push(element);
  }
  
  pop() {
    if (this.items.length === 0) {
      return "Underflow";
    }
    return this.items.pop();
  }
  
  peek() {
    return this.items[this.items.length - 1];
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

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // Output: 30
console.log(stack.pop()); // Output: 30
console.log(stack.size()); // Output: 2
```

2. **Building and Managing a Task Queue**:

```javascript
const taskQueue = [];

// Add tasks to the queue
taskQueue.push('Task 1');
taskQueue.push('Task 2');
taskQueue.push('Task 3');

console.log('Current queue:', taskQueue); // Output: ["Task 1", "Task 2", "Task 3"]

// Process tasks in a LIFO (Last In, First Out) order
while (taskQueue.length > 0) {
  const currentTask = taskQueue.pop();
  console.log('Processing:', currentTask);
}

// Output:
// Processing: Task 3
// Processing: Task 2
// Processing: Task 1
```

3. **Manipulating a History Stack**:

```javascript
const browserHistory = [];

// Navigate to pages
function navigateTo(page) {
  browserHistory.push(page);
  console.log(`Navigated to ${page}`);
}

// Go back one page
function goBack() {
  if (browserHistory.length > 1) {
    browserHistory.pop(); // Remove current page
    const previousPage = browserHistory[browserHistory.length - 1];
    console.log(`Navigated back to ${previousPage}`);
    return previousPage;
  } else {
    console.log('No previous page to navigate to');
    return null;
  }
}

navigateTo('Home'); // Output: Navigated to Home
navigateTo('Products'); // Output: Navigated to Products
navigateTo('Product Details'); // Output: Navigated to Product Details

console.log('Current page:', browserHistory[browserHistory.length - 1]); // Output: Product Details

goBack(); // Output: Navigated back to Products
```

### Performance Considerations:

Both `push()` and `pop()` operations are efficient with a time complexity of O(1) in most cases, as they only operate on the end of the array. This makes them ideal for stack-like operations.

By using the `Array.push()` and `Array.pop()` methods together, you can efficiently implement stack-like data structures and algorithms in JavaScript. 