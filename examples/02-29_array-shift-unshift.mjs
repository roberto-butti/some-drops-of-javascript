// Examples for Array.shift() and Array.unshift()

// Basic usage of shift()
const fruits = ['Apple', 'Banana', 'Orange']
console.log('Original array:', fruits)
const removedItem = fruits.shift()
console.log('After shift():', fruits)
console.log('Removed item:', removedItem)
// Output:
// ["Banana", "Orange"]
// "Apple"

// Shifting from an empty array
const emptyArray = []
console.log('\nEmpty array:', emptyArray)
const removedFromEmpty = emptyArray.shift()
console.log('After shift() on empty array:', emptyArray)
console.log('Removed item (undefined):', removedFromEmpty)
// Output:
// []
// undefined

// Basic usage of unshift()
const vegetables = ['Broccoli', 'Spinach']
console.log('\nOriginal array:', vegetables)
const newLength = vegetables.unshift('Carrot')
console.log('After unshift():', vegetables)
console.log('New length:', newLength)
// Output:
// ["Carrot", "Broccoli", "Spinach"]
// 3

// Adding multiple elements with unshift()
const numbers = [3, 4, 5]
console.log('\nOriginal array:', numbers)
const multiUnshiftLength = numbers.unshift(1, 2)
console.log('After unshift() with multiple elements:', numbers)
console.log('New length:', multiUnshiftLength)
// Output:
// [1, 2, 3, 4, 5]
// 5

// Implementing a Queue data structure
console.log('\n--- Queue Implementation ---')
class Queue {
    constructor() {
        this.items = []
    }

    enqueue(element) {
        return this.items.push(element)
    }

    dequeue() {
        if (this.items.length === 0) {
            return 'Underflow'
        }
        return this.items.shift()
    }

    front() {
        if (this.items.length === 0) {
            return 'No elements in Queue'
        }
        return this.items[0]
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }

    clear() {
        this.items = []
    }
}

const queue = new Queue()
console.log('Is queue empty?', queue.isEmpty()) // true

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log('Queue after enqueues:', queue.items)
console.log('Queue size:', queue.size()) // 3
console.log('Front element:', queue.front()) // 10

console.log('Dequeued element:', queue.dequeue()) // 10
console.log('Queue after dequeue:', queue.items)
console.log('Queue size after dequeue:', queue.size()) // 2
console.log('New front element:', queue.front()) // 20

queue.clear()
console.log('Queue after clear:', queue.items)
console.log('Is queue empty after clear?', queue.isEmpty()) // true

// Processing tasks in order
console.log('\n--- Task Processing Example ---')
const taskQueue = []

// Add tasks to the queue
taskQueue.push('Task 1')
taskQueue.push('Task 2')
taskQueue.push('Task 3')

console.log('Current queue:', taskQueue) // ["Task 1", "Task 2", "Task 3"]

// Process tasks in a FIFO (First In, First Out) order
console.log('Processing tasks:')
while (taskQueue.length > 0) {
    const currentTask = taskQueue.shift()
    console.log('Processing:', currentTask)
}
console.log('Queue after processing:', taskQueue) // []

// Maintaining a sliding window
console.log('\n--- Sliding Window Example ---')
function slidingWindow(arr, windowSize) {
    const result = []
    const window = []

    for (let i = 0; i < arr.length; i++) {
        window.push(arr[i]) // Add new element

        // If window is full, process it
        if (window.length === windowSize) {
            result.push([...window]) // Store current window
            window.shift() // Remove oldest element
        }
    }

    return result
}

const data = [1, 2, 3, 4, 5, 6, 7]
console.log('Original data:', data)
console.log('Sliding windows of size 3:', slidingWindow(data, 3))
// Output: [[1, 2, 3], [2, 3, 4], [3, 4, 5], [4, 5, 6], [5, 6, 7]]

// Performance comparison between shift and pop
console.log('\n--- Performance Note ---')
console.log('For large arrays, shift() and unshift() are slower than pop() and push()')
console.log('This is because all elements need to be reindexed when adding/removing from the beginning')
console.log('Consider using specialized data structures for frequent operations on large arrays') 