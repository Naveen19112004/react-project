import React, { useState } from "react";

// ✅ Lecture 8 – Normal Counter
// ------------------------------
/*
const App = () => {
  const [counter, setCounter] = useState(0);

  const inc = () => {
    setCounter(counter + 1); // updates the UI and variable
  };

  return (
    <div>
      <button onClick={inc}>Increment</button>
      <h1>{counter}</h1>
    </div>
  );
};
*/

// ✅ Interview Question – What is the output?
// ------------------------------
/*
👉 Calling setCounter multiple times (non-callback) batches updates.
👉 React does NOT immediately apply each one → it applies the last value.
👉 So this code:
      setCounter(counter + 1);
      setCounter(counter + 1);
      ...
   Will still update counter only ONCE.

✅ Correct approach:
👉 Using callback (prevCounter => prevCounter + 1) guarantees ALL increments.
*/

const App = () => {
  const [counter, setCounter] = useState(0);

  const inc = () => {
    // ❌ Incorrect: these will be batched and treated as one
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    // ✅ Correct: using callback to increment based on previous value
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div>
      <button onClick={inc}>Increment</button>
      <h1>{counter}</h1>
    </div>
  );
};