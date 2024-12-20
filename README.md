# React useEffect Hook Memory Leak

This repository demonstrates a common error in React's `useEffect` hook:  forgetting to include a return statement for cleanup functions.  This can lead to memory leaks and unexpected behavior.

## The Bug

The `bug.js` file contains a `MyComponent` that uses `useEffect` to log the current count.  However, it omits the crucial `return` statement within the effect, resulting in a function that never cleans up its side effects.

## The Solution

The `bugSolution.js` file corrects this by adding a return statement that calls a cleanup function which will clear any timers, subscriptions or event listeners.