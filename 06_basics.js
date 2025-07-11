// // lec 8
// // interview question 
// import React,{useState} from 'react'

// const 06_basics = () => {
//     const [counter,setcounter]=useState(0);
//     const inc=()=>{
//         setcounter(counter+1);
//     }
//   return (
//     <div>
//         <button onClick={inc}>increment</button>
//       <h1 >{counter}</h1>
//     </div>
//   )
// }

// export default 06_basics;
// interview question 
// import React,{useState} from 'react'

// const 06_basics = () => {
//     const [counter,setcounter]=useState(0);
//     const inc=()=>{
//         setcounter(counter+1);
//         setcounter(counter+1);
//         setcounter(counter+1);
//         setcounter(counter+1);
//         setcounter(counter+1);
//     }
//   return (
//     <div>
//         <button onClick={inc}>increment</button>
//       <h1 >{counter}</h1>
//     </div>
//   )
// }
// what is the output ?
// useState what does it do ?
// all the updates that you have to send in the ui ,not only int the 
// ui but eevn in the variable ,it sends them in badges,
// this is what the fiber is for,that we need to send inside the badges 
// fiber uses diffing algorithm
// setcounter is  a fn that is now i can wirite caallback 


// const inc=()=>{
//         setcounter(preccounter=>precounter+1);
//         setcounter(preccounter=>precounter+1);
//         setcounter(preccounter=>precounter+1);
//         setcounter(preccounter=>precounter+1);
//         setcounter(preccounter=>precounter+1);
//     }
//     //tis updates 
//     as it work like a promise 
//     retrun and then goes to the next it doesnot gpes in a batch for like before 

// export default 06_basics

// (Lecture 8 + Important Interview Question)

// js
// Copy code
// // ✅ What is useState?

// // - useState is a React Hook that allows us to add state to a functional component.
// // - It returns an array with 2 values:
// //   1. The current state value
// //   2. A function (like setCounter) to update the state

// const [counter, setCounter] = useState(0);
// 🚫❓ Interview Case – Multiple Updates at Once
// jsx
// Copy code
// const inc = () => {
//   setCounter(counter + 1);
//   setCounter(counter + 1);
//   setCounter(counter + 1);
//   setCounter(counter + 1);
//   setCounter(counter + 1);
// };
// ❌ Output: 1 only (NOT 5)
// 🧩 Why?

// Because React batches multiple setState() calls made with the same value of counter.

// In this example, counter is 0, so all setCounter(counter + 1) are actually setCounter(1) again and again.

// React performs the last update only because it considers them all the same.

// ✅ That’s why only 1 update is reflected.

// 🧠 React Internals Behind This
// React uses Fiber architecture, which enables:

// Batching of updates

// Diffing algorithm to optimize DOM updates

// Only one render cycle for batched state updates

// Updates in React do not apply immediately.
// They are queued and applied after the function finishes running.

// ✅ Correct Approach – Using Callback Function (prevCounter)
// jsx
// Copy code
// const inc = () => {
//   setCounter(prev => prev + 1);
//   setCounter(prev => prev + 1);
//   setCounter(prev => prev + 1);
//   setCounter(prev => prev + 1);
//   setCounter(prev => prev + 1);
// };
// ✅ Output: 5
// 🧠 Why?

// Each setCounter(prev => prev + 1) uses the latest updated value, not the stale one.

// React ensures that each callback gets the most recent value of the state.

// These are not batched into one final value, so all 5 calls are respected.

// ⚙️ Summary – useState & setState
// Concept	Explanation
// useState()	Hook to store state in a function component
// setCounter(value)	Updates state with provided value (batched if same)
// setCounter(prev => ...)	Callback form, updates based on previous value
// Batching	React groups multiple updates for optimization
// Fiber	React's architecture for rendering updates efficiently
// Diffing	Compares virtual DOM trees to update only what’s changed
// Reconciliation	Decides what to keep, what to remove, what to update in the DOM

// 🔥 Interview Tip:
// Q: What will be the output of 5 setCounter(counter + 1)?
// A: Only one update will be applied — output will increase by 1.

// Q: How to fix it?
// A: Use functional updates → setCounter(prev => prev + 1) for each call. 
