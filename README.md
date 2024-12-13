# Node.js Server Port Already in Use

This repository demonstrates a common error in Node.js applications where attempting to start a second instance of a server on the same port results in an error because the port is already in use.  The solution demonstrates how to handle this gracefully.

## Bug

The `bug.js` file contains a simple Express.js server. Running this file twice without stopping the first instance will result in an error.

## Solution

The `bugSolution.js` file provides a solution to handle the port already in use error using a `try...catch` block and the `server.close()` method.