const numbers = [1, 2, 3, 4, 5]
console.log('Original Array:', numbers) //expected output: [1, 2, 3, 4, 5]

// Using copyWithin() method to create a new array where method copies to index 1 all elements from index 3 to the end
console.log('New Array:', numbers.copyWithin(1, 3)) //expected output: [1, 4, 5, 4, 5]

// In this case, the method copies to index 1 all elements from index 0 to index 3
console.log('New Array:', numbers.copyWithin(1, 0, 3)) //expected output: [1, 1, 2, 3, 5]

// It's possible use negative values
console.log('New Array:', numbers.copyWithin(-2, -3, -1)) //expected output: [1, 2, 3, 3, 4]

// copyWithin() will propagate empty slots
const halfBlankArray = [1, , 3]
console.log('New Array:', halfBlankArray.copyWithin(2, 1, 2)) //expected output: [1,,]

// The method reads the length property of 'obj' and then manipulates the integer indices involved.
const obj = {
  length: 5,
  3: 1,
}
console.log(Array.prototype.copyWithin.call(obj, 0, 3)) // expected output: { '0': 1, '3': 1, length: 5 }
