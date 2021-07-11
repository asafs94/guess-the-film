import React, { FC, useEffect, useState } from 'react'
import { SingleCharInputProps } from './types';
import styles from './SingleCharInput.module.scss'
import classNames from 'classnames';


const FunctionKeys = {
  Backspace: 'Backspace',
  Escape: 'Escape',
  Delete: 'Delete',
}

const isFunctionKey = (key: string) => Object.values(FunctionKeys).includes(key);

const defaultRegex = /[^\s]/ //Anything but whitespace.

const SingleCharInput: FC<SingleCharInputProps> = ({ className, onPrevious, onNext, regex = defaultRegex, onChange, defaultValue = '', disabled = false }) => {

  const [char, setChar] = useState('' || defaultValue);


  const onDelete = () => {
    setChar('');
    onPrevious && onPrevious()
  }

  const handleFunctionKey = (key: string) => {
    switch (key) {
      case FunctionKeys.Delete:
      case FunctionKeys.Escape:
      case FunctionKeys.Backspace:
        return onDelete();
    }
  }

  const onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (isFunctionKey(event.key)) {
      event.preventDefault();
      return handleFunctionKey(event.key);
    }
  }

  const validateKey = (key: string) => {
    if (key.length > 1) return false;
    if (regex && !regex.test(key)) return false;
    return true;
  }

  const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const valid = validateKey(event.key);
    if (!valid) return; //Do nothing
    event.preventDefault();
    setChar(event.key);
    onNext && onNext();
  }

  useEffect(() => {
    onChange && onChange(char);
  }, [onChange, char])

  return (
    <input className={classNames(styles.Root, className)} disabled={disabled} onKeyUp={onKeyUp} onKeyPress={onKeyPress} value={char} />
  )
}


export default SingleCharInput;
