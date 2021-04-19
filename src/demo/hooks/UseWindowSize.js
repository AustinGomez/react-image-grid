import { useState, useEffect } from "react";

const getSize = () => {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth
  };
};

const useWindowSize = () => {
  let [windowSize, setWindowSize] = useState(getSize());

  const handleResize = () => {
    setWindowSize(getSize());
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return windowSize;
};

export default useWindowSize;
