import { useState } from "react";

export default function useInputState(intialValue) {
  const [value, setValue] = useState(intialValue);
  function onChange(event) {
    setValue(event.target.value);
  }

  return { value, onChange };
}
