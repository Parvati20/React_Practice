  // use ref: it is used to store the reference of the element, it is used persist value between the renders without causing the re-render of the component.


//   it is used to store the refrence of the element.
//   it is used persist value between the renders without cousing the re-render
//   of the Component.
//   useref returns a object is a null.
//   useref will not re-renders the component  but it update the value in console.

// it is a like container that stores a value that you can update and Access.
// useRef is commonly used to directly access a DOM element in functional components. For example, you might want to focus an input field when a component mounts.

// useRef doesn’t trigger a re-render when the current value changes.




// import React, { useRef, useState, useEffect } from 'react';

// function UseRef() {
//   const [count, setCount] = useState(0);
//   const ref = useRef(0);

//   const handleIncrement = () => {
//     setCount(count + 1);
//     ref.current = ref.current + 1;
//   };

//   useEffect(() => {
//     console.log('State:', count);
//     console.log('Ref:', ref.current);
//   }, [count]); // Run effect when count changes

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={handleIncrement}>Increment</button>
//     </div>
//   );
// }

// export default UseRef;



import React, { useRef } from 'react';

function UseRef() {
  // Create a ref to store the input element
  const inputRef = useRef(null);

  const handleFocus = () => {
    // Use the ref to focus the input field
    inputRef.current.focus();
    console.log('Input field focused!');
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click the button to focus me" />
      <button onClick={handleFocus}>Focus the Input</button>
    </div>
  );
}

export default UseRef;

// Purpose: This code creates a React component that focuses an input field when a button is clicked.

// useRef: The useRef hook creates a reference (inputRef) that is used to directly access the input element in the DOM.

// Input Element: The ref={inputRef} connects the inputRef to the input element. After the component mounts, inputRef.current will point to this input element.

// Button Click: When the "Focus the Input" button is clicked, the handleFocus function is triggered. This function uses inputRef.current.focus() to set focus on the input field.

// No Re-render: Using useRef to focus the input does not cause the component to re-render.

// In summary, this component allows you to click a button to programmatically focus an input field using the useRef hook.
