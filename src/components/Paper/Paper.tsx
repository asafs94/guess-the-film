import classNames from 'classnames';
import { FC, HTMLAttributes } from 'react'
import styles from './Paper.module.scss'

const Paper: FC<HTMLAttributes<HTMLDivElement>> = ({ className, children, ...rest }) => {
  return (
    <div className={classNames(styles.Root, className)} {...rest}>
      {children}
    </div>
  )
}


export default Paper;