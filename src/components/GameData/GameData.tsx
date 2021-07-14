import classNames from 'classnames';
import { FC } from 'react'
import Icons from '../../assets/icons';
import Paper from '../Paper';
import styles from './GameData.module.scss'
import { TransitionGroup } from 'react-transition-group'
import Grow from '../Animations/Grow';
import Score from '../Score/Score';

type Props = GameData & {
  className?: string
}

const GameData: FC<Props> = ({ lifeLeft, hintsUsed, score, className }) => {

  return (
    <Paper className={classNames(styles.Root, className)}>
      <Score className={styles.Score} score={score} aria-label={`Score: ${score}`} />
      <TransitionGroup className={styles.LifeLeft} aria-label={`Life Left: ${lifeLeft}`}>
        {new Array(lifeLeft < 0 ? 0 : lifeLeft).fill('').map((l, index) =>
          <Grow key={`heart-${index}`} id={`heart-${index}`}>
            <Icons.Heart className={styles.Heart} />
          </Grow>
        )}
      </TransitionGroup>
      <div className={styles.HintsUsed} >Hints Used: {hintsUsed}</div>
    </Paper>
  )
}


export default GameData;
