import { generateRandomIndex } from ".";


const UNIQUE_CHARACTERS = ['&', '^', '%', '$', '#', '@', '!', '~', '|', '*'] as const;

const replaceAt = function (str: string, index: number, replacement: string) {
  if (index >= str.length) {
    return str.valueOf();
  }
  return str.substring(0, index) + replacement + str.substring(index + 1);
}

const getAmountOfCharactersToRemove = (name: string, percentageToReplace: number) => Math.floor(percentageToReplace * name.length); //50% of chars

export const replaceRandomChar = (str: string, replacement: string, except: string[] = []) => {
  const allowedIndexes = str.split('').map((char, index) => ({ value: char, index })).filter(char => !except.includes(char.value)).map(char => char.index);
  return replaceAt(str, allowedIndexes[generateRandomIndex(allowedIndexes)], replacement);
}


export const generatePartialName = (name: string, percentageToReplace: number) => {
  const amountOfCharsToRemove = getAmountOfCharactersToRemove(name, percentageToReplace);
  const blankSpace = UNIQUE_CHARACTERS.find(char => !name.includes(char));
  if (!blankSpace) throw new Error("Could not find a proper replacer for string");
  let _name = name;
  for (let i = 0; i < amountOfCharsToRemove; i++) {
    _name = replaceRandomChar(_name, blankSpace, [blankSpace, ' ']);
  }
  return {
    origin: name,
    altered: _name,
    blankSpaceSymbol: blankSpace
  }
}



export default class ReplacementString {

  origin: string;
  altered: string;
  replacementSymbol: string;

  constructor(str: string, percentageToReplace: number = 0.5) {
    const { origin, altered, blankSpaceSymbol } = generatePartialName(str, percentageToReplace);
    this.origin = origin;
    this.altered = altered;
    this.replacementSymbol = blankSpaceSymbol;
  }
}