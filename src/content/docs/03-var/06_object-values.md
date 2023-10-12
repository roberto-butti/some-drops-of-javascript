---
title: 'Getting all the object values'
sidebar:
  label: The object values
---


## Getting all the values of an object using `Object.values()`

The `Object.values()` method gives you an array with all the values linked to an object's properties.

```js
const user = {
    name: 'John',
    age: 30,
}
console.log(Object.values(user)); // ['John', 30]
```

## Usecase
`Object.values()` is particularly valuable in scenarios where you need to search for specific values within an object

Consider a library of books. You want to find all the books by a specific author.
```js
// Sample library of books
const library = {
  book1: {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Classics',
  },
  book2: {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Classics',
  },
};

const libraryValues = Object.values(library);

function findBooksByAuthor(author) {
  return libraryValues.filter((book) => book.author === author);
}
const author = 'Harper Lee';
const book = findBooksByAuthor(author); // Finding books by "Harper Lee"
console.log(author, book);

```
