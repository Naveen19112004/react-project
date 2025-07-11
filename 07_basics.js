// 📘 React Project: bgChanger — Full Notes
// 🧠 Why This Project?
// React concepts are clear (State, Props, Components).

// But confidence comes only when you start building projects.

// Start with small, simple projects — even if they look "childish", they help build your foundation.

// A background color changer may seem small, but it gives hands-on with:

// useState

// Inline styling in React

// React event handling (onClick)

// Basic component structure

// 🏗️ Project Overview
// A single full-screen div whose background color changes based on button click.

// Buttons for colors like red, green, blue, etc. at the bottom.

// All colors use the same state hook to update the background.

// You get to learn:

// React state

// Inline styles

// JSX syntax

// Proper use of event handlers

// 🔁 Step-by-Step Logic
// Start with a useState() to manage background color:

// js
// Copy code
// const [color, setColor] = useState("olive");
// Use that color as the inline style for a container:

// jsx
// Copy code
// <div style={{ backgroundColor: color }}>
// Create buttons for each color and update the state on click:

// jsx
// Copy code
// <button onClick={() => setColor("red")}>Red</button>
// ⚠️ Key Concept: Why Not onClick={setColor("red")}?
// ❓Question:
// Why can’t we just write onClick={setColor("red")}?

// 🧠 Explanation (as per the video):
// React’s onClick expects a function, not the result of a function.

// When you do this:

// jsx
// Copy code
// onClick={setColor("red")}
// React immediately executes setColor("red") during render, not when the button is clicked.

// So you are giving it a value, not a function reference.

// ✅ Correct Way:
// jsx
// Copy code
// onClick={() => setColor("red")}
// This is called a callback function.

// Now, React doesn’t execute setColor immediately.

// Instead, it stores the function definition.

// On actual click, it calls the function with "red".

// 🔍 Analogy from the video:
// "onClick ko ek function chahiye, jo wo event pe chale, lekin jab aap setColor("red") likh dete ho, to wo turant call ho jata hai. Isiliye hume ek arrow function banana padta hai: () => setColor("red")."

// So you’re telling React:

// "Hey, call this function when the button is clicked, not now."

// ✅ When Direct Function Works
// You can write just onClick={someFunction} only if:

// That function takes no parameters

// You're not calling it immediately

// Example:

// js
// Copy code
// function handleClick() {
//   setColor("red");
// }

// <button onClick={handleClick} />
// But if you need to pass parameters, you must wrap it in an arrow function.

// 🧪 Extra Tip (from video):
// setColor("red") returns undefined (nothing).

// So onClick={setColor("red")} is basically like onClick={undefined}.

// And that’s not valid — it breaks the functionality.

// 🎯 Summary – Interview Key Points
// Topic	Insight
// useState	Used to store background color
// Inline style	Applied using double curly braces { { backgroundColor: color } }
// JSX onClick	Expects a function, not a direct function call
// Why arrow function	Needed to pass arguments without immediately calling the function
// Color buttons	Styled individually, can be customized using CSS or inline style

// 📌 Final Code Snippet to Remember
// jsx
// Copy code
// <button onClick={() => setColor("blue")} style={{ backgroundColor: "blue" }}>
//   Blue
// </button>
// 💬 Practice Question
// ❓ Why does onClick={() => setColor("red")} work, but onClick={setColor("red")} doesn’t?

// ✅ Answer: Because React needs a function reference to call when the event occurs, not a function result (which happens immediately).