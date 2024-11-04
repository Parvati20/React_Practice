// useState is a React Hook that allows you to add state management to functional components.
// It lets you declare a state variable and a function to update it.
// A function used to update the state variable.

// useState Return Value

// - state: The current value of the state.
// - setState: A function to update the state value.

// Syntax/Example: const [count, setCount] = useState(0);




// import React, { useState } from 'react';

// function UseState() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>Counter: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//     </div>
//   );
// }

// export default UseState;



import React, { useState } from 'react';

function UseState() {
  // Declare a state variable `count` with an initial value of 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default UseState;

// useState(0): Initializes the state with a value of 0. count is the current state value, and setCount is the function to update it.
// setCount(count + 1): Updates the state when the button is clicked.


