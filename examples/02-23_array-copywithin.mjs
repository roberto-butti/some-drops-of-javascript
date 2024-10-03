const numbers = [1, 2, 3, 4, 5]

// Using copyWithin() method to create a new array where number '5' is replaced by number '1'
// '4' is the index of replaced element and '0' the index of substitute
const copyNumbers = numbers.copyWithin(4, 0)

console.log('Original Array:', numbers)
console.log('New Array:', copyNumbers)
