/* const domElement = document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement)*/
// Simulating how React handles an element object and renders it to the DOM

const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank',
  },
  children: 'Click me to visit Google',
};

// Select the root container where we want to render the element
const mainContainer = document.querySelector('#root');

// Call the custom render function
customRender(reactElement, mainContainer);

// Custom render function that mimics React's rendering logic
function customRender(reactElement, container) {
  // Create the element (in this case, an 'a' tag)
  const domElement = document.createElement(reactElement.type);

  // Set the inner text or children
  domElement.innerHTML = reactElement.children;

  // Set each property/attribute from the props object
  Object.keys(reactElement.props).forEach((propName) => {
    domElement.setAttribute(propName, reactElement.props[propName]);
  });

  // Append the created element to the container
  container.appendChild(domElement);
}
