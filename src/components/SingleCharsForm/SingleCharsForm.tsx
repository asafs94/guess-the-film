import styles from './SingleCharsForm.module.scss'
import { FC, useEffect } from 'react';
import SingleCharInput from '../SingleCharInput';


const generateWordKey = (index: number, word: Array<string>) => `word-${word.join('')}-${index}`;
const generateCharKey = (wordIndex: number, char: string, charIndex: number) => `${wordIndex}-char-${char}-${charIndex}`;

const wordsArray = [
  ['S', 'o', 'm', 'e'],
  ['w', 'o', 'r', 'd'],
  ['', 'e', 'r', 'e'],
]

const SingleCharsForm: FC<any> = ({ value, onSubmit, onChange }) => {



  return (
    <form className={styles.Root}>
      {wordsArray.map((lettersArray, wordIndex) => {
        return <div className={styles.Word} key={generateWordKey(wordIndex, lettersArray)} >
          {lettersArray.map((char, charIndex) => <SingleCharInput className={styles.Char} key={generateCharKey(wordIndex, char, charIndex)} defaultValue={char} disabled={char !== ''} />)}
        </div>
      })}
    </form>
  )
}


export default SingleCharsForm;
