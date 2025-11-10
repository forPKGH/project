import React from "react";
import { useEffect, useState } from "react";

import "./Timer.css"

const Timer = ({ onTimerComplete }) => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      onTimerComplete();
    }
  }, [count, onTimerComplete]);

  return (
    <div className="container">
      <div className="timer">
        <span className="timer__description">Начало через...</span>
        <span className="timer__count">{count}</span>
      </div>
    </div>
  );
}

export default Timer;