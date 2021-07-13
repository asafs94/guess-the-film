import { FC, HTMLAttributes } from 'react';
import styles from './GameOver.module.scss'

type Props = HTMLAttributes<HTMLDivElement> & { onPlayAnother: () => void }

const GameOver: FC<Props> = ({ onPlayAnother }) => {
  return (
    <div className={styles.Root}>
      <h1>Game Over</h1>
      <button onClick={onPlayAnother}>Play Another</button>
    </div>
  )
}


export default GameOver;