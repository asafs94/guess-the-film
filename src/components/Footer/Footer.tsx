import classNames from 'classnames';
import { FC, HTMLAttributes } from 'react'
import IconButton from '../IconButton';
import styles from './Footer.module.scss'

type Props = {
  onHint: () => void,
  onGuess: () => void
} & HTMLAttributes<HTMLDivElement>

const Footer: FC<Props> = ({ className, onHint, onGuess, ...props }) => {
  return (
    <div className={classNames(styles.Root, className)} {...props}>
      <IconButton className={styles.HintButton} onClick={onHint} icon="Info" aria-label="Hint" />
      <button onClick={onGuess} className={styles.SubmitButton}>Check the guess</button>
    </div>
  )
}


export default Footer;
