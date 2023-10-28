---
title: 'Getting the portable end of line'
sidebar:
  label: End Of Line
---

## The portable end of line: `os.EOL`
`os.EOL` is a constant in the Node.js `os` module that represents the end-of-line(EOL) marker for the current operating system. It provides a <b>platform-specific string</b> for the end of a line in a file or text stream. The value of os.EOL varies depending on the operating system:

:::note
On *Unix-based* systems (Linux, macOS), os.EOL is `\n` (line feed).<br/>
On *Windows* systems, os.EOL is `\r\n` (carriage return + line feed).
:::

This constant is particularly useful when working with text files or manipulating strings in a cross-platform environment. It ensures that line endings in files are appropriate for the platform being used, preventing issues with file compatibility.

### Example

Here's an example demonstrating the use of `os.EOL` to write content to a file with proper line endings:

```javascript
const os = require('os');

const text = 'This is the first line' + os.EOL + 'This is the second line';
console.log(text);
```
`os.EOL` is used to ensure that the line breaks in the `text` variable are compatible with the current operating system, resulting in consistent line endings when the output is viewed in different platforms.