import React, { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [autoUpdate, setAutoUpdate] = useState(false);

  const updateTime = () => {
    setTime(new Date().toLocaleTimeString());
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
