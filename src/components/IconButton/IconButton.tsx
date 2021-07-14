import classNames from 'classnames';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import Icons from '../../assets/icons';
import styles from './IconButton.module.scss'

type Props = {
  icon: keyof typeof Icons,
} & ButtonHTMLAttributes<ReactNode>

const IconButton: FC<Props> = ({ icon, className, ...props }) => {

  const Component = Icons[icon];
  return (
    <button className={classNames(styles.Root, className)} {...props}>
      <Component />
    </button>
  )
}


export default IconButton;
