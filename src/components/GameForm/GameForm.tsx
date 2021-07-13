import styles from './GameForm.module.scss'
import { FormEvent, forwardRef, useEffect, useMemo, useState } from 'react';
import WordInput from '../WordInput/WordInput';
import { getClosestEnabledInput } from '../../utils';
import { CharInputArray } from '../WordInput/types';
import classNames from 'classnames';
import { GameFormProps } from './types';


const getFirstEnabledWord = (words: CharInputArray[]) => words.findIndex(word => word.some(input => !input.disabled))

const GameForm = forwardRef<HTMLFormElement, GameFormProps>((props, ref) => {
  const { words, onSubmit, className } = props;
  const [_words, set_words] = useState(words);

  const firstEnabledWordIndex = useMemo(() => getFirstEnabledWord(_words), [_words])

  useEffect(() => {
    set_words(words);
  }, [words])

  const onChange = (index: number, _word: CharInputArray) => {
    set_words(prevWords => {
      const newWords = [...prevWords];
      newWords[index] = _word;
      return newWords;
    })
  }

  const onAskFocus = (element: HTMLDivElement, direction: "forward" | "backward") => {
    const target = direction === "forward" ? element.nextElementSibling : element.previousElementSibling;
    const selector = direction === "forward" ? "input:first-child" : "input:last-child";
    const input = target?.querySelector(selector);
    if (!(input instanceof HTMLInputElement)) return;
    const inputToFocus = input.disabled ? getClosestEnabledInput(input, direction) : input;
    if (inputToFocus) inputToFocus.focus();
    else onAskFocus(target as HTMLDivElement, direction);
  }

  const validateForm = () => {
    const someCharIsEmpty = _words.some(word => word.some(input => !input.value));
    return someCharIsEmpty ? 'Oopsi! you missed a letter.' : '';
  }

  const _onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const error = validateForm();
    if (error) return;
    const name = _words.map(word => word.map(inputChar => inputChar.value).join('')).join(' ')
    return onSubmit(name)
  }

  return (
    <form ref={ref} className={classNames(styles.Root, className)} onSubmit={_onSubmit}>
      {_words.map((word, index) => <WordInput key={'word-' + index} autoFocus={firstEnabledWordIndex === index} className={styles.Word} value={word} onAskFocus={onAskFocus} onChange={(newWord) => onChange(index, newWord)} />)}
      <button style={{ display: 'none' }} type="submit" />
    </form>
  )
})





export default GameForm;
