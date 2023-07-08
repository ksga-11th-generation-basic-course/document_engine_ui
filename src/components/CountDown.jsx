import React, { useEffect, useState } from "react";

const Countdown = ({ seconds,setSeconds, onTimeout, reset,setReset }) => {
  const [count, setCount] = useState(seconds);
  useEffect(() => {
    if (reset) {
      setCount(seconds);
      setReset(false)
    }
  }, [reset, seconds, setReset]);

  useEffect(() => {
    if (count === 0) {
      onTimeout();
    } else {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
        setSeconds(count);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [count, onTimeout, setSeconds]);

  return <span>{count}</span>;
};

export default Countdown;