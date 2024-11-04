// import React, { useEffect } from 'react';

// const Child = ({ onButtonClick }) => {
//   useEffect(() => {
//     console.log('ChildComponent rendered');
//   });

//   return (
//     <div>
//       <h2>Child Component</h2>
//       <button onClick={onButtonClick}>Click Me</button>
//     </div>
//   );
// };

// export default Child;

// import React,{memo} from "react";

// function Child({ number, incrementNumber }) {
//   //memo => Lets you skip re-rendering a component when its props are unchanged.
//   console.log("Child rendered");
//   return (
//     <div>
//       <h1>{number}</h1>
//       <button onClick={incrementNumber}>Increment Number</button>
//     </div>
//   );
// }

// export default memo(Child);


import React from 'react';

function Child({ increment }) {
  console.log('Child component rendered');

  return (
    <div>
      <button onClick={increment}>Increment Count</button>
    </div>
  );
}

export default Child;
