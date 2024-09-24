const arr = [
  [1, 2],
  [3, 4],
  [5, 6],
]
console.log(arr.flatMap((x) => x)) // Output: [1, 2, 3, 4, 5, 6]

const arr2 = [
  [1, 2],
  [3, 4],
  [5, 6],
]
console.log(arr2.flatMap((x) => x.map((n) => n * 2))) // Output: [2, 4, 6, 8, 10, 12]

const arr3 = [[1, 2], , [3, 4], [5, 6]]
console.log(arr3.flatMap((x) => x)) // Output: [1, 2, 3, 4, 5, 6]

const arr4 = [
  ['hello', 'world'],
  ['foo', 'bar'],
]
console.log(arr4.flatMap((x) => x.join(' '))) // Output: ["hello world", "foo bar"]
