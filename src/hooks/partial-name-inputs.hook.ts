import { useEffect, useState } from "react";
import ReplacementString from "../utils/replacementString.util";


const getCharacterCasing = (char: string) => {
  return char.toUpperCase() === char ? "uppercase" as const : "lowercase" as const
}

const mapStringToSingleCharInputs = (name: string) => {
  if (!name) return [];
  const { altered, replacementSymbol } = new ReplacementString(name, 0.5);
  const originArrays = name.split(' ').map(word => word.split(''));
  return altered.split(' ').map((word, wordIndex) => word.split('').map((char, charIndex) => {
    return ({
      value: char === replacementSymbol ? '' : char,
      disabled: char !== replacementSymbol,
      name: `word-${wordIndex}-char-${charIndex}`,
      preferredCasing: getCharacterCasing(originArrays[wordIndex][charIndex])
    })
  }))
}

const usePartialNameInputs = (str: string) => {
  const [partialNameInputs, setPartialNameInputs] = useState(mapStringToSingleCharInputs(str));
  useEffect(() => {
    setPartialNameInputs(mapStringToSingleCharInputs(str))
  }, [str])

  return partialNameInputs;
}

export default usePartialNameInputs

