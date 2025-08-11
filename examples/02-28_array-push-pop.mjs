// Examples for Array.push() and Array.pop()

// Basic usage of push()
const fruits = ['Apple', 'Banana']
console.log('Original array:', fruits)
const newLength = fruits.push('Orange')
console.log('After push():', fruits)
console.log('New length:', newLength)
// Output:
// ["Apple", "Banana", "Orange"]
// 3

// Adding multiple elements with push()
const numbers = [1, 2]
console.log('\nOriginal array:', numbers)
const multiPushLength = numbers.push(3, 4, 5)
console.log('After push() with multiple elements:', numbers)
console.log('New length:', multiPushLength)
// Output:
// [1, 2, 3, 4, 5]
// 5

// Basic usage of pop()
const vegetables = ['Carrot', 'Broccoli', 'Spinach']
console.log('\nOriginal array:', vegetables)
const removedItem = vegetables.pop()
console.log('After pop():', vegetables)
console.log('Removed item:', removedItem)
// Output:
// ["Carrot", "Broccoli"]
// "Spinach"

// Popping from an empty array
const emptyArray = []
console.log('\nEmpty array:', emptyArray)
const removedFromEmpty = emptyArray.pop()
console.log('After pop() on empty array:', emptyArray)
console.log('Removed item (undefined):', removedFromEmpty)
// Output:
// []
// undefined

// Implementing a Stack data structure
console.log('\n--- Stack Implementation ---')
class Stack {
    constructor() {
        this.items = []
    }

    push(element) {
        return this.items.push(element)
    }

    pop() {
        if (this.items.length === 0) {
            return 'Underflow'
        }
        return this.items.pop()
    }

    peek() {
        return this.items[this.items.length - 1]
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

const stack = new Stack()
console.log('Is stack empty?', stack.isEmpty()) // true

stack.push(10)
stack.push(20)
stack.push(30)
console.log('Stack after pushes:', stack.items)
console.log('Stack size:', stack.size()) // 3
console.log('Top element:', stack.peek()) // 30

console.log('Popped element:', stack.pop()) // 30
console.log('Stack after pop:', stack.items)
console.log('Stack size after pop:', stack.size()) // 2

stack.clear()
console.log('Stack after clear:', stack.items)
console.log('Is stack empty after clear?', stack.isEmpty()) // true

// Building and managing a task queue
console.log('\n--- Task Queue Example ---')
const taskQueue = []

// Add tasks to the queue
taskQueue.push('Task 1')
taskQueue.push('Task 2')
taskQueue.push('Task 3')

console.log('Current queue:', taskQueue) // ["Task 1", "Task 2", "Task 3"]

// Process tasks in a LIFO (Last In, First Out) order
console.log('Processing tasks:')
while (taskQueue.length > 0) {
    const currentTask = taskQueue.pop()
    console.log('Processing:', currentTask)
}
console.log('Queue after processing:', taskQueue) // []

// Manipulating a history stack
console.log('\n--- Browser History Example ---')
const browserHistory = []

// Navigate to pages
function navigateTo(page) {
    browserHistory.push(page)
    console.log(`Navigated to ${page}`)
}

// Go back one page
function goBack() {
    if (browserHistory.length > 1) {
        browserHistory.pop() // Remove current page
        const previousPage = browserHistory[browserHistory.length - 1]
        console.log(`Navigated back to ${previousPage}`)
        return previousPage
    } else {
        console.log('No previous page to navigate to')
        return null
    }
}

navigateTo('Home')
navigateTo('Products')
navigateTo('Product Details')

console.log('Current history stack:', browserHistory)
console.log('Current page:', browserHistory[browserHistory.length - 1])

goBack() // Back to Products
console.log('History stack after going back:', browserHistory)

goBack() // Back to Home
console.log('History stack after going back again:', browserHistory) 