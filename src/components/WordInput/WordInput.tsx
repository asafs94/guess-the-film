import styles from './WordInput.module.scss'
import classNames from 'classnames';
import SingleCharInput from '../SingleCharInput';
import { ChangeEvent, FC, useRef } from 'react';
import { getClosestEnabledInput } from '../../utils';
import { WordInputProps } from './types';



const WordInput: FC<WordInputProps> = ({ name, className, onChange, disabled = false, value, onAskFocus, ...rest }) => {

  const divRef = useRef<HTMLDivElement | null>(null);

  const setFocus = (currentInput: HTMLInputElement, direction: "backward" | "forward") => {
    const inputToFocus = getClosestEnabledInput(currentInput, direction);
    if (inputToFocus instanceof HTMLInputElement) inputToFocus.focus();
    else onAskFocus && divRef.current && onAskFocus(divRef.current, direction)
  }

  const _onChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const newValue = [...value];
    newValue[index].value = input.value;
    onChange(newValue);
    setFocus(input, input.value ? "forward" : "backward")
  }

  return <div className={classNames(styles.Root, className)} ref={divRef}>
    {value.map((input, index) =>
      <SingleCharInput
        key={`${input.name}`}
        disabled={input.disabled || disabled}
        onChange={(event) => _onChange(index, event)}
        value={input.value}
        className={styles.Char}
        onFocus={event => event.target.select()}
      />
    )}
  </div>
}

export default WordInput;
