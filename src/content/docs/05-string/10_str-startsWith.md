---
title: "Checking if a String Starts With a Substring"
sidebar:
  label: String startsWith
---
## String startsWith: `String.startsWith()`

The `startsWith()` method in JavaScript is used to determine whether a string begins with the characters of a specified substring. It returns a `boolean` value indicating the result of the comparison.

Syntax:
```javascript
string.startsWith(searchString, position)
```

### The parameters

1. **searchString**: The substring to search for at the `beginning` of the string.
2. **position (optional)**: The position in the string to begin the search. It is an integer value, the default is 0. If a **negative** value is provided, it is **treated as 0**.

### Return Value:

The `startsWith()` method returns true if the string starts with the specified substring; otherwise, it returns `false`.

### Example

```javascript
// Checking if a string starts with a specific substring
const str = 'Hello, world!';

const startsWithHello = str.startsWith('Hello');
console.log(startsWithHello);
// Output: true
```

In the example above, the `startsWith()` method is used to check if the string 'Hello, world!' starts with the substring 'Hello'. The result, `true`, is stored in the variable startsWithHello.

```javascript
// Checking if a string starts with a substring at a specific position
const str = 'Hello, world!';

const startsWithWorld = str.startsWith('world', 7);
console.log(startsWithWorld);
// Output: true

const startsWithHello = str.startsWith('hello', 7)
console.log(startsWithHello);
// Output: false
```

In this example, the `startsWith()` method is used to check if the substring 'world' starts at position `7` in the string 'Hello, world!'. The result, `true`, is stored in the variable startsWithWorld.

In a second example, the `startsWith()` method is again used, but this time to check if the substring 'hello' starts at `position 7` in the string 'Hello, world!'. The startsWithHello variable will be assigned the value `false` because, starting from position `7`, the substring 'hello' is **not found** at the beginning of the **remaining part** of the string.

:::note
the comparison is case-sensitive, so 'Hello' and 'hello' are considered different in this context.
:::

```javascript
// Checking if a string starts with a substring at a position beyond the string length
const str = 'Hello, world!';

const startsWithBeyondLength = str.startsWith('world', 15);
console.log(startsWithBeyondLength);
// Output: false
```

In this example, the `startsWith()` method is used to check if the substring 'world' starts at position `15` in the string 'Hello, world!'. Since the position is **beyond the length** of the string, the result is `false`, which is stored in the variable startsWithBeyondLength.

```javascript
// Checking if a string starts with a substring using a negative position
const str = 'Hello, world!';

const startsWithUniverseNegative = str.startsWith('universe', -20);
console.log(startsWithUniverseNegative);
// Output: false

const startsWithHelloNegative = str.startsWith('Hello', -20);
console.log(startsWithHelloNegative);
// Output: true
```

:::note
If a **negative** value is provided, it is **treated as 0**. so, the search starts from the beginning of the string.
:::

In this example, the `startsWith()` method is used to check if the string 'Hello, world!' starts with the substring 'universe' when starting the search from the beginning. The result, `false`, is stored in the variable startsWithHelloNegative.

In this second example, the `startsWith()` method is used to check if the string 'Hello, world!' starts with the substring 'Hello' when starting the search from beginning. Since 'Hello' is found at **default index 0**, the result is `true`.

By using the `String.startsWith()` method, you can efficiently check if a string begins with a specified substring, providing a useful tool for string comparison in JavaScript.