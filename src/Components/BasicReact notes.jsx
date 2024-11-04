// 1.What is React?
// React is a popular JavaScript library for building user interfaces, particularly single-page applications where you need fast, interactive web pages. 
// It allows developers to create large web applications that can update and render efficiently with changing data.

// 2. Setting Up a React Project

// 1.npx create-react-app my-app
// 2.npm install

// install packages.
// 3.cd my-app
// 4.npm start
// It opens your app in the browser at http://localhost:3000/.


// Key Files and Folders:
// node_modules/: Contains all the project dependencies installed via npm.we not upplod this file because there are so many filesthats why we can not uppload node_modules on github
// public/: Contains public assets that can be directly served to the browser.
// public/: Contains public assets that can be directly served to the browser.

// index.html: The main HTML file of the app. React injects the application into the <div id="root"></div> in this file.
// favicon.ico: The icon displayed in the browser tab.
// src/: Contains the source code of the React application.

// index.js: The entry point of the React application. It renders the App component into the DOM.
// App.js: The root component of your application, where you build your UI.
// App.css: The CSS file for styling the App component.
// index.css: Global styles for your application.
// .gitignore: Specifies which files and directories Git should ignore.

// package.json: Lists the project dependencies, scripts, and metadata.

// package-lock.json: Locks the versions of dependencies to ensure the same version is installed across environments.

// README.md: Contains information about the project, automatically generated with create-react-app.

// 4. Basic React Concepts
// Components
// What? Components are the building blocks of a React application. Each component is a self-contained piece of UI.
// Types:
// Functional Components: Simple functions that return JSX.
// A function component is just a regular JavaScript function.
// Function Component: A function that takes props and returns JSX.
// components that are created using function.function components are also called a stateless components.


// import { useState } from 'react';

// function MyFunctionComponent() {
//   const [count, setCount] = useState(0);


//   const handleClick = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={handleClick}>Increment</button>
//     </div>
//   );
// }



// Class Components: ES6 classes that extend React.Component.
// A class component in React is a way to create a component (a piece of your web page) using a class. It’s a type of component that can hold its own data, known as state, and has special methods that run at different times in the component's life.
// Component class and has its own state, lifecycle methods, and render method.
// State Management: Can manage local state using this.state and this.setState().
// Lifecycle Methods: Do not have lifecycle methods directly, but you can use Hooks like useEffect to handle side effects.


// class MyClassComponent extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { count: 0 };
//     }
  
//     handleClick = () => {
//       this.setState({ count: this.state.count + 1 });
//     }
  
//     render() {
//       return (
//         <div>
//           <p>Count: {this.state.count}</p>
//           <button onClick={this.handleClick}>Increment</button>
//         </div>
//       );
//     }
//   }
  


// .Lifecycle methods help you control what happens when your component appears, updates, or disappears from the screen.
// They are especially useful for things like data fetching, updating the UI, or cleaning up resources.


// 1. Mounting:When the component is being created and inserted into the DOM (the web page).
// constructor() :Called first when the component is initiated. It’s used for initializing state and binding event handlers.
// render(): The only required method in a class component, returns the JSX to be rendered.
// componentDidMount(): Called after the component has been rendered to the DOM. Ideal for API calls, subscriptions, and initializing DOM elements.

// 2. Updating: These methods are called when a component is being re-rendered due to changes in props or state.
// 3.Unmounting: These methods are called when a component is being removed from the DOM.

// componentWillUnmount(): Called just before the component is removed from the DOM. Perfect for cleanup tasks like canceling network requests, clearing timers, or unsubscribing from subscriptions.



// b. JSX (JavaScript XML):What? JSX is a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript.

// c. State and Props
// State: State is an object that represents the dynamic data of a component. You can update state using useState in functional components or this.setState in class components.
// state => it is an internal object of a component.
    // It is used to store the data that can be used in the component.
    // whenever the state changes the component will re-render.

// Props: Props (short for "properties") are used to pass data from one component to another, typically from parent to child.

// c. event handling : In React, event handling is the process of responding to user interactions, such as clicks, hover, focus, blur, etc. React provides a way to handle events using event handlers, which are functions that are called when an event occurs.
// Event Attributes: In JSX, you use camelCase for event attributes (e.g., onClick, onChange, onSubmit).
// Event Object: Provides details about the event (like event.target.value, event.key, etc.) and is passed as an argument to the event handler function.
// handleClick, handleSubmit,handleChange is are event for handling .

// 1. Click Event

// function handleClick() {
//     console.log('Button clicked!');
//   }
  
//   <button onClick={handleClick}>Click me</button>

//   Form Submit Event
//   function handleSubmit(event) {
//     event.preventDefault(); // Prevents the default form submission
//     console.log('Form submitted!');
//   }
  
//   <form onSubmit={handleSubmit}>
//     <input type="text" placeholder="Enter text" />
//     <button type="submit">Submit</button>
//   </form>
  
  
    // hook => hooks are the functions that help you to use the state and other react features in the functional components.

