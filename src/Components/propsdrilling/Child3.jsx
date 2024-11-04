// components/Child3.jsx
import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';

function Child3() {
  // Use useContext to access name, gender, and their setters
  const { name, setName, gender, setGender } = useContext(DataContext);

  return (
    <div>
      <h4>Child 3</h4>
      <p>Name: {name}</p>
      <p>Gender: {gender}</p>
      <button onClick={() => setName("Anil")}>Change Name</button>
      <button onClick={() => setGender("Male")}>Change Gender</button>
    </div>
  );
}

export default Child3;
