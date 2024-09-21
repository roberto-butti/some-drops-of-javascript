# How to contribute

The goal is to build an open-source book about JavaScript functions for new users in the JavaScript ecosystem.
This book collects some useful, unknown, underrated JavaScript functions or stuff discovered, used, and learned during JavaScript's daily use.
Using frameworks daily (like React, Vue, and Svelte), sometimes the perception of the power of the language and the basic functionalities provided by the JavaScript core could be lost. I see that usually, I used to look at the framework documentation or look for a package in Packagist for the system, array, and string functions instead of using some core functionalities provided by the language.
The goal is to cover more and more functions, so the goal is to create new pages, and each page covers 1 specific function.

The functions are grouped into topics:

- System
- Array
- Variables and types
- String
- File
- Extra bonus chapter where I'm collecting some nice cheatsheet

Each function is explained with the description, and examples in markdown files in the `src/content/docs` directory.

## The file name convention
We have all the Markdown files in the `src/content/docs` directory where you can find the folders for each topic (`00-intro`, `01-system`, `02-array`, etc.
Each topic ( Intro, System, Array) has a specific folder with the format

- 2 digits (00 , 01) as topic identifier (progressive number)
- A "dash" separator `-`
- A slug for the topic (intro, system, array)

Following the format above you can have folders like: `00-intro`, `01-system`, `02-array`.
Each folder contains files. Each file shows a JavaScript function.
The file name has the format:

- 2 digits (00 , 01) as function identifier (progressive number);
- An "underscore" separator `_`;
- A subtopic slug (by default is the same of the topic), for example `system`, `os`, `process` etc;
- A "dash" separator `-`;
- A slug for the function (cpus, version, userinfo);
- The extension (md or mdx).

Following the format described above, you can have in the folder `01-system` files with names like `01_os-cpus.md`, `02_os-version.md` etc

For example, for the file `01-system/02_os-version.md`:
- `01`: (the first group of digits) is the progressive number for the `system` topic;
- `system`: is the slug of the topic;
- `02`: is the progress number for functions
- `os`: the subtopic slug (os is for the operating system)
- `version`: the function explained
- `md`: the extension

## Running locally the project
The rendering part of all the Markdown files is managed via Astro3 + Starlight theme and Bun.
If you want to read and browse the HTML eBook and see your changes in realtime when you are working on markdown files in the root directory of the cloned repository (where you have the `package.json`, `bun.lockb` files):

- install the packages via `bun install`;
- run the local server via `bun run dev`

If you want to build the HTML files, you can run the following command:
~~~
bun run build
~~~

If you want to see the preview of the built files you can run the following command:

~~~
bun run preview
~~~

## Submit ideas or feature requests

* Take a look if your request is already there https://github.com/roberto-butti/some-drops-of-javascript/issues
* If it is not present, you can create a new one https://github.com/roberto-butti/some-drops-of-javascript/issues/new

## Submit your changes

If you want to submit a pull request, please send a [GitHub Pull Request to Some drops of JavaScript](https://github.com/roberto-butti/some-drops-of-javascript/pull/new/main) with a clear list of what you've done (read more about [pull requests](https://help.github.com/articles/about-pull-requests)).


Please use "main" branch for pull request.

## Instructions for writing a markdown file for a JavaScript Function

Each chapter in this book focuses on a single JavaScript function or method. The goal is to provide comprehensive, well-structured, and practical documentation that helps developers understand and use the function effectively. Follow the guidelines below to structure your chapter.

### Chapter Structure

1. Frontmatter (Mandatory)

The frontmatter section should be placed at the beginning of the markdown file and enclosed between triple dashes (---). It provides essential metadata about the chapter.

Example for mandatory fields:
```
---
title: 'Modifying an Array'
description: 'Adding, removing, and replacing elements in an array with JavaScript.'
sidebar:
  label: Modifying Array
---
```
Where:
- `title`: The feature implemented via the function
- `description`: A brief overview of what the function does.
- `sidebar.label`: the label used in the left menu

2. Introduction

Start with a clear and concise explanation of what the function does. Highlight its primary use cases and why it's useful.

3. Syntax and Parameters

- Provide the general syntax of the function, including its parameters and their expected types.
- Describe each parameter in detail, including whether it is optional or required and what its role is.
- Include the return type of the funtion

4. Use cases

Provide several practical use cases demonstrating how the function can be used to solve real-world problems.

Each use case should include a clear explanation of the problem being solved, a code example, and a detailed breakdown of how the function is being used.

5. Common Pitfalls

- Discuss common mistakes or misunderstandings related to the function.
- Provide guidance on how to avoid these issues.

6. Additional Resources

Include links to relevant documentation, tutorials, or other chapters in the book for further reading.
