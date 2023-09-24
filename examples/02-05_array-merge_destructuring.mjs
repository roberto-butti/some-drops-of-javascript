const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
console.dir([...array1, ...array2]);
// [ 'a', 'b', 'c', 'd', 'e', 'f' ]

const array3 = ["g", "h"];
console.dir([...array1, ...array2, ...array3]);
console.dir([...array3, ...array2, ...array1]);
