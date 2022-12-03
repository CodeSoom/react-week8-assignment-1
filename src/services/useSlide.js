import { useState, useEffect } from 'react';

const useSlide = (elementLength) => {
  const [boolean, setBoolean] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => {
        if (count < elementLength - 1) {
          setBoolean(false);
          setCount((prev) => prev + 1);
        } else {
          setBoolean(true);
          setCount(0);
        }
      },
      boolean ? 0 : 2500,
    );

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return [count, boolean];
};

export default useSlide;
