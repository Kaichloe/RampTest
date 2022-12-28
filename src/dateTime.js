import React, { useState, useEffect } from "react";
import "./styles.css";

const DateTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <h1>{time.toUTCString()}</h1>;
};

export default DateTime;
