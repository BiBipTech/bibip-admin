import { useEffect, useRef, useState } from "react";

export const useInterpolation = (currentValue: number) => {
  const [pastValue, setPastValue] = useState(0);

  const loopCount = useRef(0);

  useEffect(() => {
    if (pastValue === currentValue) return;

    if (loopCount.current > 100) {
      loopCount.current = 0;
      setPastValue(currentValue);
      return;
    }
    const diff = currentValue - pastValue;
    const step = diff / 100;

    console.log("while", loopCount.current);

    loopCount.current += 1;

    setTimeout(() => {
      setPastValue(pastValue + step);
    }, 5);
  }, [currentValue, pastValue]);

  return pastValue;
};
