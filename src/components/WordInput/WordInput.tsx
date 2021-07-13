import styles from './WordInput.module.scss'
import classNames from 'classnames';
import SingleCharInput from '../SingleCharInput';
import { ChangeEvent, FC, useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import { getClosestEnabledInput } from '../../utils';
import { CharInputArray, WordInputProps } from './types';

const getFirstEnabledInput = (inputs: CharInputArray) => inputs.findIndex(i => !i.disabled);

const WordInput: FC<WordInputProps> = ({ autoFocus, name, className, onChange, disabled = false, value, onAskFocus, ...rest }) => {

  const divRef = useRef<HTMLDivElement | null>(null);
  const firstEnabledInputIndex = useMemo(() => getFirstEnabledInput(value), [value])

  useEffect(() => {
    if (autoFocus && firstEnabledInputIndex !== -1 && divRef.current) {
      const inputs = Array.from(divRef.current?.children) as Array<HTMLInputElement>
      inputs[firstEnabledInputIndex].focus()
    }
  }, [autoFocus, firstEnabledInputIndex])

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
  }

  const onInput = (event: React.FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget;
    input.value && setFocus(input, "forward")
  }

  const onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const input = event.currentTarget;
    if (["Backspace", "Delete"].includes(event.key)) setFocus(input, "backward")
  }

  return <div className={classNames(styles.Root, className)} ref={divRef}>
    {value.map((input, index) =>
      <SingleCharInput
        key={`${input.name}`}
        disabled={input.disabled || disabled}
        onChange={(event) => _onChange(index, event)}
        onInput={onInput}
        onKeyUp={onKeyUp}
        value={input.value}
        className={styles.Char}
        onFocus={event => event.target.select()}
        preferredCasing={input.preferredCasing}
        {...rest}
      />
    )}
  </div>
}

export default WordInput;
