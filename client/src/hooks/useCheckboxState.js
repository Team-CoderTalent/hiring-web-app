import { useState } from "react";

export default function useCheckboxState(initial) {
  const [value, setValue] = useState(initial);

  function onChange(event) {
    setValue(event.target.checked);
  }
  return { value, onChange };
}
