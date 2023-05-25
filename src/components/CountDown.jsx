import React, { useEffect, useState } from "react";

const Countdown = ({ seconds, onTimeout, reset }) => {
  const [count, setCount] = useState(seconds);

  useEffect(() => {
    if (count === 0) {
      onTimeout();
    } else {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [count, onTimeout]);

  useEffect(() => {
    if (reset) {
      setCount(seconds);
    }
  }, [reset, seconds]);

  return <span>{count}</span>;
};

export default Countdown;
