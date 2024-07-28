import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  useEffect(() => {
    axios
      .get("/api")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="App">
      <h1>Hello, world!</h1>
    </div>
  );
}

export default App;
