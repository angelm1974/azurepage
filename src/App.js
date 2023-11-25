import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  let server_endpoint =
    "https://testowe-zaplecze.azurewebsites.net/api/HttpTrigger2?code=fZN12MZfgxdLXyrTjNeK6bAtO3401vaXQpa7je4q1YHdAzFumhUidw==";
  const [data, setData] = useState("");

  useEffect(() => {
    fetch(server_endpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setData(data.message))
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, [server_endpoint]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Moja aplikacja dla Azure static web apps</p>
        <p>{data}</p>
      </header>
    </div>
  );
}

export default App;
