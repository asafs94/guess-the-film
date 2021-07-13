


export const generateRandomIndex = (array: Array<any>) => {
  return randomIntInRange(0, array.length);
}

export const randomIntInRange = (min: number = 0, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export const generatePartialName = (name: string) => {
  const amountOfCharsToLeave = Math.floor(0.5 * name.length); //50% of chars
  const words: (string)[][] = name.split(' ').map(word => word.split(''));
  const matrixCells = words.reduce((matrix, word, wordIndex) => {
    const indexes = word.map((char, charIndex) => [wordIndex, charIndex] as [number, number]);
    return [...matrix, ...indexes];
  }, [] as [number, number][])
  while (matrixCells.length > amountOfCharsToLeave) {
    const randomMatrixIndex = generateRandomIndex(matrixCells)
    const [wordIndex, charIndex] = matrixCells[randomMatrixIndex];
    words[wordIndex][charIndex] = '';
    matrixCells.splice(randomMatrixIndex, 1);
  }
  return words;
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