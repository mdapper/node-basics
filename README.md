# Node.js

Some basics concepts about Node.js.

## Introduction to Node.js

Node.js is a JavaScript environment that allows you to perform a multitude of tasks and build all sorts of applications.

### Commands

Running a node application:

```
node <fileName>
```

Running the node REPL (Read-Eval-Print-Loop):

```
node
```

To exit the REPL use CTRL+D once or CTRL+C twice.

### JavaScript without the Browser

Node.js allows you to write JavaScript programs outside of the browser.

#### Native Objects

Native objects are those objects that are part of the JavaScript programming language and are available in both Node.js and the Browser.

#### Host Objects

Host objects are those objects that are only available in a single environment. For example the DOM, or Document Object Model is not available in Node.js but are available in the Browser. Likewise, the host objects to access the local file system is not available in the Browser but are in Node.js.

## Building a Command Line Application

Node.js can be used to make all sorts of applications. We'll build a command-line application to retrieve student's profile information from the Treehouse API.

## Reference

- [Node Docs](http://nodejs.org/api/)
- [Stability Index](http://nodejs.org/api/documentation.html#documentation_stability_index)
