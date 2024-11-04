// The useCallback hook in React is used to memoize a function, meaning it saves the function and only re-creates it when its dependencies change. 
// This helps in optimizing performance by preventing the function from being recreated on every render unless necessary.
// const memoizedFunction = useCallback(() => {
//   // function logic here
// }, [dependencies]);




//   // usecallback hook is used to prevent the function from being recreated on every render
// A callback hook, specifically useCallback, is a React hook that allows you to memoize (store) a function so that it's not recreated every time the component re-renders.



// Why Use useCallback?
// Optimization: It avoids unnecessary function recreations when a component re-renders. This is useful when passing functions to child components or performing expensive calculations.
// Prevent Unnecessary Re-renders: In a parent-child component structure, useCallback ensures that a function passed as a prop doesn’t cause the child component to re-render if the function hasn’t changed.


// import React, { useCallback, useState } from 'react';

// import Child from "./Child";


// const Parent = () => {
//   const [count, setCount] = useState(0);

//   // Memoize the callback using useCallback
//   const handleClick = useCallback(() => {
//     console.log('Button clicked!');
//   }, []); // Empty dependency array means this callback doesn't depend on any values

//   return (
//     <div>
//       <h1>Parent Component</h1>
//       <button onClick={() => setCount(count + 1)}>Increment Count</button>
//       <p>Count: {count}</p>
//       <Child onButtonClick={handleClick} />
//     </div>
//   );
// };

// export default Parent;




// import React, { useCallback, useState } from "react";
// import Child from "./Child";

// function Parent() {
//   const [counter, setCounter] = useState(0);
//   const [number, setNumber] = useState(0);

//   const incrementCounter = () => {
//     console.log("Counter incremented in Parent");
//     setCounter(counter + 1);
//   };

//   // usecallback hook is used to prevent the function from being recreated on every render

//   // const incrementNumber = () => {
//   //   setNumber(number + 1);
//   // };

//     const incrementNumber = useCallback(() => {
//       setNumber(number + 1);
//     }, [number]);

//   return (
//     <div>
//       <h1>{counter}</h1>
//       <button onClick={incrementCounter}>Increment Counter</button>

//       <Child number={number} incrementNumber={incrementNumber} />
//     </div>
//   );
// }

// export default Parent;



import React, { useState, useCallback } from 'react';
import Child from './Child';

function Parent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // Memoize the increment function so it doesn't re-create on every render
  const incrementCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <Child increment={incrementCount} />
    </div>
  );
}

export default Parent;

