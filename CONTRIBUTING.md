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

Each function is explained with the description, and examples in markdown files in the `content` directory.

## The file name convention
In the `src/content/docs` directory, we have all the Markdown files.
You can find the folders for the topic.
Each topic ( Intro, System, Array) has a specific folder with the format
- 2 digits (00 , 01) as topic identifier (progressive number)
- A separator `-`
- A slug for the topic (intro, system, array)
Following the format above you can have folders like: `00-intro`, `01-system`, `02-array`.
Each folder contains files. Each file represent a JavaScript function.
The file name has the format:
- 2 digits (00 , 01) as function identifier (progressive number);
- A separator `_`;
- A subtopic slug (by default is the same of the topic) for example `system`, `os`, `process` etc;
- A separator `-`;
- A slug for the function (cpus, version, userinfo);
- the extension (md or mdx).
Following the format described above you can have in the folder `01-system` files with name like `01_os-cpus.md`, `02_os-version.md` etc

For example, for the file `01-system/02_os-version.md`:
- `01`: (the first group of digits) is the progressive number for the `system` topic;
- `system`: is the slug of the topic;
- `02`: is the progress number for functions
- `os`: the subtopic slug (os is for the operating system)
- `version`: the function explained
- `md`: the extension


## Submit ideas or feature requests

* Take a look if your request is already there https://github.com/roberto-butti/some-drops-of-javascript/issues
* If it is not present, you can create a new one https://github.com/roberto-butti/some-drops-of-javascript/issues/new

## Submit your changes

If you want to submit a pull request, please send a [GitHub Pull Request to Some drops of JavaScript](https://github.com/roberto-butti/some-drops-of-javascript/pull/new/main) with a clear list of what you've done (read more about [pull requests](https://help.github.com/articles/about-pull-requests)).


Please use "main" branch for pull request.