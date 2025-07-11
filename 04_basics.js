// 🧠 React Counter Problem: Why is UI not updating when using `let counter`?

// ❓ Problem Statement:
// - I want to create a counter that increases when I click a button.
// - I tried using `let counter = 0;` and incrementing it inside a function.
// - But the updated value is not visible on the UI. Why?

// 🚫 Problem in plain JavaScript or in React (wrong approach):
// let counter = 0;
// function addValue() {
//   counter++;
//   // This changes the value in memory, but the UI doesn't update automatically
// }

// ⚠️ Reason:
// - The browser or React doesn't track the change in normal variables.
// - In plain HTML/JS, we must **manually update the DOM** using `innerText` or similar.
// - In React, we must use **state**, because React re-renders the UI **only** when state changes.

// ✅ Solution (React way):
// - Use the `useState` hook to declare a piece of state.
// - React monitors this state — whenever it changes, React re-renders the component.

// 🔧 React Counter Example using useState:

import { useState } from "react";

function App() {
  // ✅ Declare state variable 'counter' with initial value 0
  const [counter, setCounter] = useState(0);

  // ✅ Function to increment counter
  function addValue() {
    setCounter(counter + 1);  // React will re-render when setCounter is called
  }

  return (
    <>
      <p>Counter: {counter}</p>   {/* React displays the current value of counter */}
      <button onClick={addValue}>Increment</button> {/* Calls addValue on click */}
    </>
  );
}

export default App;

// ✅ Summary:
// - Never use `let counter = 0` if you want React to update the UI automatically.
// - Use `useState()` to create reactive variables.
// - React listens to state changes and re-renders the UI accordingly.
// - setCounter(newValue) updates the state AND triggers the re-render.

// 💡 Remember:
// - `let` updates the variable → 🛑 UI does NOT update
// - `useState` + `setCounter` → ✅ UI updates automatically

// 🔍 What happens when this runs?
// React runs App() once when the page loads.

// It sees counter = 0 and returns:

// html
// Copy code
// <p>Counter: 0</p>
// <button>Increment</button>
// React displays that on the screen.

// Now if you click the button and run counter++, the number changes in memory, but:

// ❌ React doesn’t re-run the App() function

// ❌ So it doesn’t build the UI again

// ❌ The screen stays the same
// ✅ UI Updation in React using Hooks

// 🧠 In React, when we want the UI to update automatically after a value changes,
// we must use **React Hooks** like `useState`.

// 🔁 Why useState?
// - `useState` allows us to create **stateful variables**.
// - When we update state using `setState`, React **automatically re-renders the component**.
// - This re-render updates the UI with the latest values.

// ✅ Syntax:
const [variable, setVariable] = useState(defaultValue);

// 👉 The `defaultValue` can be of any type:
// - Number → `useState(0)`
// - String → `useState("Naveen")`
// - Boolean → `useState(false)`
// - Array → `useState([])`
// - Object → `useState({})`
// - Even functions or other data structures

// 🧠 Remember:
// - `useState()` returns an array of two items:
//     1. The current state value (e.g., `variable`)
//     2. A function to update it (e.g., `setVariable()`)

// 🎯 Key Point:
// - When you call `setVariable(newValue)`:
//   → React updates the value
//   → Then automatically re-renders the component
//   → This is what causes the UI to update

// ✅ Example:
const [count, setCount] = useState(0);

function increase() {
  setCount(count + 1); // This triggers re-render, UI shows new count
}

// ❌ If you use:
// let count = 0;
// count++;
// - This updates the value in memory ONLY, not in UI (no re-render).
// ✅ What is Virtual DOM?

// 🧠 DOM (Document Object Model) = the structure of your HTML page
// - When any small change happens (like a button click),
//   the browser DOM re-renders the entire affected part → slow performance

// ⚛️ React's Solution: Virtual DOM
// - A lightweight **copy of the real DOM** created and managed in memory
// - React uses it to improve performance and avoid unnecessary re-renders

// ✅ createRoot
// - In React 18+, we use `createRoot(document.getElementById("root"))`
// - It tells React: "Here's the starting point (root) where your app should be rendered"
// - React will manage the Virtual DOM from this root element

// ✅ How Virtual DOM works internally:

// 1. When a component renders → React creates a **Virtual DOM tree** in memory
// 2. If state/props change → React creates a **new virtual DOM tree**
// 3. React compares the old tree with the new one (using **diffing algorithm**)
// 4. React finds **exactly what changed** (e.g., text in a <p> tag)
// 5. React updates **only that part** in the real DOM (called **reconciliation**)
// 🔁 This avoids full-page reloads → makes React fast and efficient

// ✅ Real DOM vs Virtual DOM

// Real DOM: updates are expensive, re-renders whole section of the page
// Virtual DOM: updates in memory first, finds diff, applies minimal changes to real DOM

// 🧠 Analogy:
// Think of Virtual DOM like a notebook copy:
// - You write and make changes there first (cheap, fast)
// - Once finalized, you copy only the changed line to the final fair notebook (real DOM)

// ✅ Summary for Interviews:
// - Virtual DOM improves performance
// - It works by comparing previous and current virtual trees (diffing)
// - Only updates the part that changed (not full re-render)
// - Core to React's efficiency

// ✅ Virtual DOM and Reconciliation – Advanced Notes

// 📌 What is Reconciliation?
// - Reconciliation is the internal algorithm React uses
// - It compares the old Virtual DOM tree with the new one
// - Then updates only the **changed parts** in the real DOM

// ❗Reconciliation is what people usually mean when they say "Virtual DOM"
// - Virtual DOM is just a concept (a copy of real DOM in memory)
// - Reconciliation is the **process** that compares and updates

// ✅ Behind the scenes in React:

// Step 1: You call setState()
// Step 2: React creates a new Virtual DOM tree
// Step 3: React compares old Virtual DOM tree vs new Virtual DOM tree (diffing)
// Step 4: It finds the changes (diff)
// Step 5: React updates only those parts in the actual browser DOM
// This process = Reconciliation

// 🧠 Think of it like:
// Old Virtual DOM   -->   diff   -->   Real DOM changes
// New Virtual DOM   -->   created after setState()

// 📌 Which DOMs are involved?
// - Virtual DOM: React’s in-memory representation (JS object tree)
// - Real (Browser) DOM: The actual page on the screen
// React compares 2 Virtual DOMs (old vs new) → NOT directly with the browser DOM

// ❗ But after diffing, React applies the changes to the real DOM efficiently

// 🧩 Important Terms:

// ➤ setState():
// - Triggers a re-render
// - Starts the Virtual DOM → Diffing → Reconciliation process

// ➤ Reconciliation:
// - Is the internal algorithm that enables Virtual DOM concept
// - Efficiently updates the browser without full reload


// - Virtual DOM: lightweight copy of the DOM stored in memory
// - Reconciliation: React's algorithm to update the UI efficiently
// - React uses two virtual trees (old & new) for comparison
// - Only changed parts are updated in the real DOM (via reconciliation)
// - setState() triggers this whole update process
