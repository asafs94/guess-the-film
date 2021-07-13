import { useEffect, useState } from "react";
import { generatePartialName } from "../utils";

const generatePartialNameInputs = (name: string) => {
  return generatePartialName(name).map((word, wordIndex) => word.map((char, index) => {
    return {
      value: char,
      disabled: char !== '',
      name: `word-${wordIndex}-char-${index}`
    }
  }))
}

const usePartialNameInputs = (str: string) => {
  const [partialNameInputs, setPartialNameInputs] = useState(generatePartialNameInputs(str));
  useEffect(() => {
    setPartialNameInputs(generatePartialNameInputs(str))
  }, [str])

  return partialNameInputs;
}

export default usePartialNameInputs