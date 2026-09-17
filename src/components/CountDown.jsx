import React, { useEffect, useState } from "react";

const CountDown = ({ expiryDate }) => {
  const [timeText, setTimeText] = useState("");

  useEffect(() => {
    const calculateTime = () => {
      const millisLeft = expiryDate - Date.now();

      if (millisLeft < 0) {
        setTimeText("EXPIRED");
        return true;
      }

      const secondsLeft = millisLeft / 1000;
      const minutesLeft = secondsLeft / 60;
      const hoursLeft = minutesLeft / 60;

      setTimeText(
        `${Math.floor(hoursLeft)}h ${Math.floor(minutesLeft % 60)}m ${Math.floor(
          secondsLeft % 60
        )}s`
      );

      return false;
    };

    // Calculate immediately
    calculateTime();

    // Update every second
    const intervalId = setInterval(() => {
      const expired = calculateTime();

      if (expired) {
        clearInterval(intervalId);
      }
    }, 1000);

    // Clean up interval when component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [expiryDate]);

  return <div className="de_countdown">{timeText}</div>;
};

export default CountDown;
