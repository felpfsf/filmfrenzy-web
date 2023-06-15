import { ChangeEvent, useState } from "react";

export const useCharCounter = () => {
  const [charCount, setCharCount] = useState(0);
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    setCharCount(inputValue.length);
  };

  return { charCount, handleInputChange };
};
