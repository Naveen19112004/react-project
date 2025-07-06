// 📁 React Project Structure (e.g., 01_basicreact created using CRA)

// ✅ index.html (inside /public folder)
// - This is the only HTML file in the project → Single Page Application (SPA).
// - It has a <div id="root"></div> — this is where React mounts your entire app.
// - You do NOT manually add <script> tags for your JS files like in traditional HTML + JS apps.
// - React (via Webpack) injects the JS bundle automatically during build.

// ✅ src/index.js or main.jsx
// - This is the actual entry point of your React app.
// - ReactDOM.createRoot() is used to attach the React app to the 'root' div in index.html.
// - It renders <App />, which is your main component.

// 📁 node_modules/
// - Contains all installed dependencies from `package.json`.
// - You should never modify this folder manually.
// - It can be deleted and regenerated using `npm install`.

// 📄 package.json
// - Lists all the dependencies, project metadata, and scripts (like start, build).
// - Used by npm to install correct libraries.

// 📄 package-lock.json
// - Locks exact versions of each dependency and sub-dependency.
// - Ensures the app runs the same on every machine/environment.

// 🚫 /build
// - This folder is created **after** you run `npm run build`.
// - It contains optimized, production-ready static files (HTML, CSS, JS).
// - Can be ignored during development.

// 📄 manifest.json
// - Used for Progressive Web Apps (PWA) or mobile-like behavior.
// - Controls how the app appears when installed on a mobile device (e.g., icon, name).

// ✅ IndexedDB / SPA Note:
// - React apps (like those from CRA) are SPAs (Single Page Applications).
// - Even though you navigate between different views, everything is loaded in one HTML page.
// - All JavaScript files (components, logic) are bundled and injected via React's build process.

// 💡 Summary:
// - Traditional JS needs <script> in HTML, but React handles it through the build tools.
// - index.html → root container
// - index.js → app entry point
// - App.js → main component
// - All components and routes are tied to this single-page structure.
// 🧠 ReactDOM and Virtual DOM

// - In a normal website, the browser creates a DOM tree (Document Object Model).
// - React also works with the DOM, but it first creates its own version of the DOM in memory — called the **Virtual DOM**.
// - This helps React efficiently update only the parts of the page that change.

// 🔗 Entry Point in React App

// - React needs a place to attach the UI it creates — usually a <div> in index.html like:
//   <div id="root"></div>

// - In index.js (or main.jsx in Vite), we use ReactDOM to create a root:
    // const root = ReactDOM.createRoot(document.getElementById('root'));

// - Then we render our main component (usually <App />) into this root:
    // root.render(<App />);

// 🛠️ What does this mean?

// - React takes <App /> (written in JSX) and renders it as real HTML in the browser.
// - JSX looks like HTML but is actually JavaScript (e.g., <br />, <div>, <CustomComponent />).
// - You can even create your own custom tags (components) like <MyButton /> or <Navbar />.

// ✅ Summary:
// - React gives you the power to render HTML using JavaScript.
// - JSX syntax looks like HTML, but under the hood it's JavaScript.
// - ReactDOM handles mounting your entire app inside a single root element in the DOM.

// ⚛️ React.StrictMode
// - This is a development-only feature that wraps your React app:
//   <React.StrictMode> <App /> </React.StrictMode>
// - It helps catch common issues like:
//     - Using deprecated lifecycle methods
//     - Detecting accidental side effects
//     - Double-invoking some functions (like useEffect) to ensure they are pure
// - Removing it doesn't break your app — it only removes these dev-time checks.
// - It's not used in production builds.

// 📄 index.html (in both CRA and Vite)
// - We never manually pass JavaScript files to it like in vanilla JS projects.
// - Instead, a single <div id="root"></div> acts as the mount point for the React app.

// ❓ How is React rendered if we’re not adding script tags manually?

// 📦 CRA (create-react-app):
// - In CRA, Webpack handles everything under the hood.
// - The bundled JS (React + your app code) is auto-injected into index.html during build.
// - You never see it directly in index.html.

// 📦 Vite:
// - Vite is simpler and faster; it doesn’t hide the setup.
// - In Vite’s public index.html, you’ll **explicitly see**:
    // <script type="module" src="/src/main.jsx"></script>
// - This directly tells the browser to load your main React entry file.
// - So unlike CRA, the file is *not injected automatically*, it's declared manually.

// ⚙️ package.json — Scripts

// In CRA:
// - package.json contains scripts like:
    // "start": "react-scripts start"
    // "build": "react-scripts build"
// - These scripts run Webpack commands behind the scenes.

// In Vite:
// - package.json contains:
    // "dev": "vite"
    // "build": "vite build"
    // "preview": "vite preview"
// - You might not see these until after running `npm install` because Vite uses its plugin system.
// - Vite uses native ES modules, so it doesn't need Webpack-style injection — it's simpler and faster.

// ✅ Summary:
// - CRA hides the complexity, Vite shows it clearly (like main.jsx being loaded in index.html).
// - React.StrictMode helps you during development but is optional.
// - Both setups render React into <div id="root"> in index.html — but the way files are injected differs.
// - CRA uses Webpack to inject scripts silently, Vite uses native script tags in index.html.


// 📁 File Naming in React

// - Component files should be named in **UpperCamelCase**, e.g., App.jsx, Chai.jsx
// - This follows React's convention: components start with an uppercase letter
// - So if you create a file `Chai.jsx`, you use it in JSX as: <Chai />

// 📄 .jsx Extension
// - In Vite (and most modern setups), we use `.jsx` for files that return JSX code
// - JSX = JavaScript + XML-like HTML syntax used in React

// 🧱 JSX Rules
// - JSX expressions must return ONLY ONE parent element
// - This means you can't do:
    // return (
    //   <h1>Hello</h1>
    //   <p>World</p>
    // )
// ❌ This will throw an error

// ✅ Solutions:

// 1️⃣ Wrap in a <div>:
    // return (
    //   <div>
    //     <h1>Hello</h1>
    //     <p>World</p>
    //   </div>
    // )

// 2️⃣ Better: Use React.Fragment (shorthand: <> </>):
    // return (
    //   <>
    //     <h1>Hello</h1>
    //     <p>World</p>
    //   </>
    // )
// - This avoids adding unnecessary <div> elements to the DOM
// - Helps keep your HTML cleaner (no extra wrappers)

// ✅ Summary:
// - File names: Capitalized (e.g., App.jsx, Chai.jsx)
// - JSX must return only one root element
// - Use <></> (React Fragments) instead of <div> when you don’t want extra DOM nodes
