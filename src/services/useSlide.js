import { useState, useEffect } from 'react';

const useSlide = (elementLength) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => (prev + 1) % elementLength);
    }, 2500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return count;
};

export default useSlide;
