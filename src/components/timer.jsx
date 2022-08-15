import React, { useEffect, useState, useRef } from "react";

function setDefaulfValue() {
  const userCount = localStorage.getItem("count");
  return userCount ? +userCount : 0;
}

function Timer() {
  const [count, setCount] = useState(setDefaulfValue());
  const [isCounting, setIsCounting] = useState(false);
  const timarIdRef = useRef(null);

  const start = () => {
    setIsCounting(true);
  };

  const stop = () => {
    setIsCounting(false);
  };

  const reset = () => {
    setCount(0);
    setIsCounting(false);
  };

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  useEffect(() => {
    if (isCounting) {
      timarIdRef.current = setInterval(() => {
        setCount((c) => c + 1);
      }, 1000);
    }

    return () => {
      timarIdRef.current && clearInterval(timarIdRef.current);
      timarIdRef.current = null;
    };
  }, [isCounting]);

  return (
    <div className="timer">
      <h1>React Timer</h1>
      <h3>{count}</h3>
      {!isCounting ? (
        <button onClick={start}>Start</button>
      ) : (
        <button onClick={stop}>Stop</button>
      )}
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Timer;
