import { useState, useEffect, useCallback } from "react";

const useToggle = initialValue => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(
    next => {
      setValue(!value);
    },
    [setValue]
  );

  return [value, toggle];
};

export default useToggle;
