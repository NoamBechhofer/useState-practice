import React, { useEffect, useState } from "react";

function time_now() {
  return new Date().toLocaleTimeString();
}

function App() {
  const [time, setTime] = useState(time_now());
  const [autoUpdate, setAutoUpdate] = useState(false);

  const updateTime = () => {
    setTime(time_now());
  };

  useEffect(() => {
    if (autoUpdate) {
      const interval = setInterval(() => {
        updateTime();
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [autoUpdate]);

  return (
    <div className="container">
      <h1>{time}</h1>
      <div>
        <input
          type="checkbox"
          name="auto-time-update"
          checked={autoUpdate}
          onChange={() => setAutoUpdate(!autoUpdate)}
        ></input>
        <label htmlFor="auto-time-update">Auto Update Time?</label>
      </div>

      <br></br>

      <div>
        {autoUpdate ? null : <button onClick={updateTime}>Get Time</button>}
      </div>
    </div>
  );
}

export default App;
