---
title: What is JavaScript?
description: JavaScript the language, the engine, and the runtime.
sidebar:
  label: What is JavaScript?
---

## Javascript Langauge

JavaScript is a high-level, versatile, and widely used programming language. Created for web development to make web pages interactive, JavaScript has since expanded its scope and can now be used in various environments, including server-side development, mobile app development, and even for building desktop applications.

JavaScript is a dynamically typed language, meaning that variable types are determined at runtime.

JavaScript is an interpreted language, allowing developers to execute code without the need for a compilation step.

JavaScript relies on the ECMAScript standard as its foundation, ensuring a standardized set of rules and features that promote consistency and compatibility across various JavaScript implementations.

## JavaScript Engine

A JavaScript engine interprets and executes the code.
JavaScript engines play a crucial role by converting JavaScript code into machine code, facilitating efficient execution and performance optimization.

JavaScript engines use Just-In-Time (JIT) compilation for executing the code.

Just-In-Time (JIT) compilation is a key technique employed by JavaScript engines to boost performance. Instead of interpreting the entire JavaScript code at once, JIT compilation dynamically translates specific portions of the code into machine code during runtime. This on-the-fly translation allows the engine to optimize the execution of frequently used code, resulting in faster and more efficient JavaScript programs.

There is more than one engine, most common are:

- **V8** is an open-source JavaScript and WebAssembly engine developed by Google. It is written in C++ and is used in the Google Chrome web browser as well as in the Node.js runtime. V8 is designed to execute JavaScript code at high speeds and has become a crucial component for improving the performance of web applications.
- **SpiderMonkey** is the JavaScript engine developed by Mozilla, the organization behind the Firefox web browser. It is an open-source engine written in C++ and is responsible for interpreting and executing JavaScript code within the Firefox browser.
- **JavaScriptCore** is the open-source JavaScript engine that is part of the WebKit project. WebKit is a browser engine primarily developed by Apple and used in their Safari browser, as well as other browsers on Apple platforms. JavaScriptCore, also known as Nitro, is responsible for interpreting and executing JavaScript code within the WebKit browser engine. JavaScriptCore is used also by the Bun runtime.

## JavaScript Runtime

A JavaScript runtime uses the JavaScript engine to execute the JavaScript code. Additionally, a JavaScript runtime provides some APIs or functionalities to interact with the hosting environment. For example, a JavaScript runtime can provide API for interaction with the Browser (for the Brower Javascript runtimes) or can provide API for interacting with the filesystem (for non-browser JavaSCript runtimes like Node.js and Bun.js).

For example, the most common JavaScript runtimes are:

- **Bun** runtime is a fast JavaScript runtime designed as a drop-in replacement for Node.js. It's written in Zig and powered by JavaScriptCore under the hood, dramatically reducing startup times and memory usage.
- **Node.js** is an open-source, cross-platform JavaScript runtime built on the V8 JavaScript engine. It allows developers to run JavaScript code on the server side, enabling the development of server-side and network applications. Node.js is event-driven and non-blocking, making it efficient for handling a large number of concurrent connections.
- **Browser** is a runtime environment within a web browser where JavaScript client-side code is executed. It provides APIs for interacting with the browser the Fetch API for making network requests, the Web Storage API for local data storage, and the Geolocation API for location-based services.
