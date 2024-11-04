// useMemo is a hook that is used to optimize the performance of the functional component.
  // useMemo is used to memoize the value of the function that is passed as the first argument.
  // useMemo is used to cache the value of the function that is passed as the first argument.
  //usememo is also used to not re-render the component if the value of the function is not changed.

  // syntax of usememo => useMemo(()=>{},[]), useEffect(()=>{},[])

  // expensive function => function that takes a lot of time to execute



  import React, { useState, useMemo } from 'react';

function UseMemo() {
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState(['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple']);

  // Expensive filtering operation
  const filteredItems = useMemo(() => {
    console.log('Filtering items...');
    return items.filter(item =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, items]);


  return (
    <div>
      <h1>Filtered Items</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search items"
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseMemo;





// searchTerm holds the user's input for filtering the list.
// items contains the list of fruits to be filtered.
// useMemo for Performance Optimization:

// useMemo prevents unnecessary recalculations of the filtered items on every render.
// The filtering function only runs when searchTerm or items change, improving performance.
// Filtering Logic:

// The items array is filtered based on whether each item includes the searchTerm (ignoring case sensitivity using .toLowerCase()).
// Input Field:

// The input field dynamically updates searchTerm as the user types, triggering the useMemo to re-filter the items.
// Memoized Result:

// useMemo stores the result of the filtering operation, meaning the filtering doesn't happen again unless necessary (i.e., when searchTerm or items are updated).