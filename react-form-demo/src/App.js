import React, { useState, useEffect } from "react";
import "./App.css"; // Import CSS for styling

function App() {
  const [items, setItems] = useState([]); // State to store fetched items
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch data from API when component mounts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts") // Sample API endpoint
      .then((response) => response.json())
      .then((data) => {
        setItems(data); // Store fetched data
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        setError("Error fetching data"); // Handle error
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>Fetched Items</h1>
      {loading ? (
        <p>Loading...</p> // Display loading message
      ) : error ? (
        <p>{error}</p> // Display error message
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
