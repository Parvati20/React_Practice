// The useEffect hook is one of the most commonly used hooks in React. It allows you to perform side effects in your function components. 
// Side effects are actions that affect something outside of the component, like fetching data, directly updating the DOM, or setting up a subscription.
// /side effects => network request, data fetching, manual DOM manipulation, event listeners, timers, logging, etc.

// / to call an APi in react there are two methods
  //fetch= > default method to call API's
  //axios = > it is a library that you have to install explicitly
    //ERROR BOUNDARY = > Error boundary is a component that is used to catch the errors in the child components tree and display a fallback UI instead of crashing the whole component tree.


// 1. No Dependency Array:If you don't pass a dependency array, the useEffect will run after every render.
// useEffect(() => {
//     console.log('Effect ran after every render');
//   });

// 2. Empty Dependency Array: If you pass an empty array, the useEffect runs only once, after the initial render. 

// seEffect(() => {
//     console.log('Effect ran only once after the initial render');
//   }, []);
  
// 3.useEffect will run every time any of those dependencies change.
  //if the dependency array is not present then the useEffect will run whenever the component is rendered or any state changes in the component.



//   import React, { useState, useEffect } from 'react';

//   function MyComponent() {
//     const [count, setCount] = useState(0);
  
//     useEffect(() => {
//       console.log('Effect is running because "count" changed:', count);
//     }, [count]); // Dependency array with "count"
  
//     return (
//       <div>
//         <button onClick={() => setCount(count + 1)}>Increment</button>
//       </div>
//     );
//   }
  




import React, { useState, useEffect } from 'react';

function UseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count changed to ${count}`);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default UseEffect;

//this is the example of useeffect


// State Initialization

// const [count, setCount] = useState(0);
// This line creates a state variable count with an initial value of 0. setCount is a function to update this state.
// useEffect Hook

// useEffect(() => { console.log(Count changed to ${count}); }, [count]);
// This hook runs after the component renders.
// It logs the current value of count to the console.
// The [count] dependency array means this effect runs every time count changes.
// Component Render

// return ( ... )
// This part renders the UI.
// It shows the current count value and a button.
// Button Click

// When you click the "Increment" button, setCount(count + 1) updates the count state.
// This causes the component to re-render.
// After re-rendering, useEffect runs again, logging the updated count.


