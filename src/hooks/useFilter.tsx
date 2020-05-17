import { useState } from "react";

export function useFilter(initialState = {}) {
  const [state, setState] = useState(initialState);

  function setFilter(filterName, val): void {
    setState((prev) => {
      return {
        ...prev,
        [filterName]: val,
      };
    });
  }

  return [state, setFilter] as const;
}
