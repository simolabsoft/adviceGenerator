import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("");
  useEffect(() => {
    fetchAdvice();
  }, []);
  const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        const { advice } = data.slip;
        console.log("Success:", advice);
        setAdvice(advice);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    // <div className="app">
    //   <div className="card">
    //     <h1 className="heading">{advice}</h1>
    //   </div>
    // </div>
    <div className="background-container">
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png"
        alt=""
      ></img>
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={fetchAdvice}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
