


export const generateRandomIndex = (array: Array<any>) => {
  return randomIntInRange(0, array.length);
}

export const randomIntInRange = (min: number = 0, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export const getClosestEnabledInput = (currentInput: HTMLInputElement, direction: "backward" | "forward"): null | HTMLInputElement => {
  const nextInput = currentInput[direction === "backward" ? "previousElementSibling" : "nextElementSibling"];
  if (!(nextInput instanceof HTMLInputElement)) return null;
  if (nextInput.disabled) return getClosestEnabledInput(nextInput, direction);
  return nextInput;
}


export const formatScore = (score: number) => {
  const strScore = `${score}`;
  return strScore.length === 1 ? `0${strScore}` : strScore;
}