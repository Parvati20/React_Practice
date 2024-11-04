import React from 'react';
import './App.css';
// import UseState from './Components/UseState';
// import UseEffect from  './Components/UseEffect';
// import UseRef from './Components/UseRef';


// import { DataProvider } from './Components/context/DataContext';  // Correct path to DataContext
// import Child1 from './Components/propsdrilling/Child1';  // Correct path to Child1

//  import UseReducer from './Components/UseReducer';
// import UseMemo from './Components/UseMemo';
// import Parent from './Components/callbackHook/Parent'; 
import EnhancedComponent from './Components/HOC/EnhancedComponent'; // This path should work if the structure is correct






function App() {
  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <UseEffect/> */}
      {/* <UseRef/> */}



      {/* <DataProvider>
      <div>
        <h1>useContext Example with name and gender</h1>
        <Child1 />
      </div>
    </DataProvider> */}

    {/* <UseReducer/> */}
    {/* <UseMemo/> */}
    {/* <Parent/> */}
    <EnhancedComponent/>
     





    </div>
  );
}

export default App;

