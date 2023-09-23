const array = ["a", "b", "c", "b", "d", "e", "a"];
array.fill(0);
console.dir(array);
// [ 0, 0, 0, 0, 0, 0, 0 ]

const array2 = ["a", "b", "c", "b", "d", "e", "a"];
array2.fill(0, 1);
console.dir(array2);
// [ 'a', 0, 0, 0, 0, 0, 0 ]

const array3 = ["a", "b", "c", "b", "d", "e", "a"];
array3.fill(0, 1, 3);
console.dir(array3);
// [ 'a', 0, 0, 'b', 'd', 'e', 'a' ]

const array4 = ["a", "b", "c", "b", "d", "e", "a"];
array4.fill(0, -1); // last element
console.dir(array4);
// [ 'a', 0, 0, 'b', 'd', 'e', 'a' ]
array4.fill(0, -2); // last 2 elements
console.dir(array4);
// [ 'a', 'b', 'c', 'b', 'd', 0, 0 ]
