
// useContext is a React hook that allows a functional component to access the value of a context provided by a Context.Provider without having to pass the context value through props.

// Context.Provider is used to provide the context value to components that need it.

// useContext takes the context object as an argument and returns the current context value.

// useContext is a React hook that allows you to access context (shared state) in a functional component. Context is a way to share data between components without passing props down manually.


// This create context creates a new object with a provider and a consumer.

  // This is also known as Context API => This enables us to transfer data without prop drilling.
  // This is a way to share data between components without having to pass props down manually at every level.


// 1. Context must be created: Before using useContext, you need to create a context using the React.createContext() method.
// Creates a Context object: When you call createContext(), you create a context object that holds the data you want to share. This context object consists of two parts:

    // 1.Provider is used to provide the data to the child components
    // 2.Consumer: A component that can use the context (usually done with useContext).
  

// components/DataContext.jsx
import React, { createContext, useState } from 'react';

// Create the context
export const DataContext = createContext();

// Create a provider component to wrap the children
export const DataProvider = ({ children }) => {
  const [name, setName] = useState("Parvati");
  const [gender, setGender] = useState("Female");

  return (
    <DataContext.Provider value={{ name, setName, gender, setGender }}>
      {children}
    </DataContext.Provider>
  );
};
