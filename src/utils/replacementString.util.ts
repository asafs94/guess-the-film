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
  const replacementSymbol = UNIQUE_CHARACTERS.find(char => !name.includes(char)); // Use a replacement symbol that doesnt exist in original string.
  if (!replacementSymbol) throw new Error("Could not find a proper replacer for string");
  let _name = name;
  for (let i = 0; i < amountOfCharsToRemove; i++) {
    _name = replaceRandomChar(_name, replacementSymbol, [replacementSymbol, ' ']);
  }
  return {
    origin: name,
    altered: _name,
    replacementSymbol
  }
}


/**
 * @class
 * An class which represents an instance of string with random missing characters or characters to be replaced.
 * Contains:
 * origin string, the altered string with a temporary special character represnting the replaced characters, and the special character.
 * @property {string} origin - original string.
 * @property {string} altered - the replacement string.
 * @property {string} replacementSymbol - the replacement symbol used.
 */
export default class RandomReplacementString {

  origin: string;
  altered: string;
  replacementSymbol: string;

  constructor(str: string, percentageToReplace: number = 0.5) {
    const { origin, altered, replacementSymbol } = generatePartialName(str, percentageToReplace);
    this.origin = origin;
    this.altered = altered;
    this.replacementSymbol = replacementSymbol;
  }
}