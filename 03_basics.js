// // 📁 Folder Setup: customReact

// // Inside this folder:
// // - index.html → our root HTML file
// // - customreact.js → our custom React-like renderer

// // ✅ index.html
// // <div id="root"></div>
// // <script src="customreact.js"></script>

// // -------------------------------------------

// // 📄 customreact.js

// // 1️⃣ Create a "React-like" element (simulating JSX output)

// const reactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank',
//   },
//   children: 'Click me to visit Google',
// };

// // 2️⃣ Select the root DOM container where this element should be injected
// const mainContainer = document.querySelector('#root');

// // 3️⃣ Call the custom render function with:
// //    - What to inject (reactElement)
// //    - Where to inject (mainContainer)
// customRender(reactElement, mainContainer);

// // 4️⃣ Define how our custom render function works

// function customRender(reactElement, container) {
//   // Create an HTML element of type reactElement.type (e.g., 'a')
//   const domElement = document.createElement(reactElement.type);

//   // Set inner content
//   domElement.innerHTML = reactElement.children;

//   // Set attributes (props like href, target, etc.)
//   Object.keys(reactElement.props).forEach((prop) => {
//     domElement.setAttribute(prop, reactElement.props[prop]);
//   });

//   // Append the element to the container
//   container.appendChild(domElement);
// }
