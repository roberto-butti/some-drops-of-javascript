// Using splice() method to modify an array by removing, adding, and replacing elements:
const fruits = ['Apple', 'Banana', 'Cherry', 'Date']

// Removing elements
const removedFruits = fruits.splice(1, 2) // Removes 2 elements starting from index 1
console.log('Modified array:', fruits) // Output: ['Apple', 'Date']
console.log('Removed elements:', removedFruits) // Output: ['Banana', 'Cherry']

// Adding elements
fruits.splice(1, 0, 'Blueberry', 'Coconut') // Adds two elements at index 1
console.log('Array after adding:', fruits) // Output: ['Apple', 'Blueberry', 'Coconut', 'Date']

// Replacing elements
fruits.splice(2, 1, 'Dragonfruit') // Replaces 1 element at index 2
console.log('Array after replacing:', fruits) // Output: ['Apple', 'Blueberry', 'Dragonfruit', 'Date']

// Using splice() method to shuffle an array:
const numbers = [1, 2, 3, 4, 5]

for (let i = numbers.length - 1; i > 0; i--) {
  // Generate a random index 'j' between 0 and 'i' (inclusive)
  const j = Math.floor(Math.random() * (i + 1))

  // Remove the element at index 'j' from the array
  const [removed] = numbers.splice(j, 1)

  // Insert the removed element back into the array at index 'i'
  numbers.splice(i, 0, removed)
}
console.log('Shuffled array:', numbers)

// Using splice() method to swap elements:
const arr = ['a', 'b', 'c', 'd']

function swap(arr, index1, index2) {
  const [elem1] = arr.splice(index1, 1)
  const [elem2] = arr.splice(index2 - 1, 1) // '-1' adjusts for the earlier removal of 'elem1'
  arr.splice(index1, 0, elem2)
  arr.splice(index2, 0, elem1)
}
swap(arr, 1, 3)
console.log('Swapped array:', arr) // Output: ['a', 'd', 'c', 'b']
