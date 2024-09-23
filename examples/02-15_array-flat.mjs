const arr = [[1, 2, 3], [4, 5, 6], 7, 8]
console.log(arr.flat()) // Output: [1, 2, 3, 4, 5, 6, 7, 8]

const arr2 = [1, 2, [3, 4, [5, 6]]]
console.log(arr2.flat()) // Output: [1, 2, 3, 4, [5, 6]]

console.log(arr2.flat(2)) // Output: [1, 2, 3, 4, 5, 6]

const arr5 = [1, 2, , 4, 5]
console.log(arr5.flat()) // Output: [1, 2, 4, 5]
