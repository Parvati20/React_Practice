//useState + reduce => useReducer

// useReducer is a React hook used to manage complex state logic in functional components. 
// It allows you to handle state updates with a reducer function that processes actions and determines how the state should change.
//  It's useful when state changes involve multiple actions or depend on previous state values.

// const [state, dispatch] = useReducer(reducer, initialState);

// / use reducer  : useReducer is a hook that is used for state management in React. It is an alternative to useState.

  // Use reducer is like use state but it is used to handle large state objects and complex state logic.

  // reduce = > it is a function that is used to reduce the array to a single value. It takes a callback function as the first argument and an initial value as the second argument.

//   / dispatch method : it is used to send the action to the reducer function.

  // reducer function : it is a function that is used to update the state based on the action type.

  // action : it is an object that contains the type and payload.

  // console.log(state);



// import React, { useReducer } from 'react';

// const initialState = { count: 0 };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count - 1 };
//     default:
//       throw new Error();
//   }
// }

// function UseReducer() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <p>Count: {state.count}</p>
//       <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
//       <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
//     </div>
//   );
// }
// export default UseReducer


// This code creates a simple counter app using React's useReducer hook.

// - initialState sets the initial count to 0.
// - reducer updates the count based on the action type (increment or decrement).
// - Counter component:
//     - Uses useReducer to get the current state and dispatch function.
//     - Renders the current count and two buttons.
//     - When a button is clicked, it dispatches an action to update the count.




// import React, { useReducer } from "react";

// function UseReducer() {
  
//   const initialState = { count: 0 };

//   function reducer(state, action) {
//     console.log(state, action, initialState);

//     if (action.type === "increment") {
//       return { count: state.count + 1 };
//     } else if (action.type === "decrement") {
//       return { count: state.count - 1 };
//     }
//   }
//   //useState + reduce => useReducer

//   const [state, dispatch] = useReducer(reducer, initialState);

  

//   // console.log(state);

//   return (
//     <div>
//       <h1>Count : {state?.count}</h1>

//       <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
//     </div>
//   );
// }

// export default UseReducer;



import React, { useReducer } from "react";

// Initial state of the form
const initialState = {
  name: "",
  email: "",
};

//PAYLOAD => it is the data that is sent along with the action.

// Reducer function that handles state updates based on actions
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload }; // Update the name field in state with the new value

    //state = > {name:"shivansh", email: ""}

    case "SET_EMAIL":
      return { ...state, email: action.payload }; // Update the email field in state with the new value

    //state = > {name:"shivansh", email: "",email:"shivansh@navgurukul.org"}

    case "RESET":
      return initialState; // Reset the form to its initial state
    default:
      return state; // Return the current state if the action type is not recognized
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Event handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value, e.target);
    dispatch({ type: `SET_${name.toUpperCase()}`, payload: value }); // Dispatch an action to update the corresponding field in state
  };

  // Event handler for the reset button
  const handleReset = () => {
    dispatch({ type: "RESET" }); // Dispatch an action to reset the form
  };

  // Event handler for the generate button
  const handleGenerate = () => {
    console.log(state); // Log the current state to the console
  };

  return (
    <div>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleInputChange}
          />
        </label>
      </form>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleGenerate}>Generate</button>
    </div>
  );
};

export default UseReducer;
