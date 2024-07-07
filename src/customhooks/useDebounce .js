import { useState, useEffect, useRef } from "react";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  const timer = useRef(null);

  useEffect(() => {
    timer.current = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer.current);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
