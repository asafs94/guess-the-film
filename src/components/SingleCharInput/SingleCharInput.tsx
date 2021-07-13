import { forwardRef, } from 'react'
import { SingleCharInputProps } from './types';
import styles from './SingleCharInput.module.scss'
import classNames from 'classnames';



const SingleCharInput = forwardRef<HTMLInputElement, SingleCharInputProps>((props, ref) => {
  const { className, preferredCasing, ...rest } = props
  return (
    <input
      ref={ref}
      className={classNames(styles.Root, className)}
      maxLength={1}
      style={{ textTransform: preferredCasing }}
      {...rest}
    />
  )
})


export default SingleCharInput;
