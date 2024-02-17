import React, { useState } from "react";

function time_now() {
  return new Date().toLocaleTimeString();
}

function App() {
  const [time, setTime] = useState(time_now());

  const updateTime = () => {
    setTime(time_now());
  };

  // setInterval(() => updateTime(), 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
