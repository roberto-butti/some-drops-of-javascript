const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
console.dir(array1.concat(array2));

const array3 = ["g", "h"];
console.dir(array1.concat(array2, array3));
//
console.dir([].concat(array1, array2, array3));
console.dir(array1 + array2 + array3);
