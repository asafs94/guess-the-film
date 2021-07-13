import React, { FC } from 'react'
import { useGame } from '../hooks/game.hook'
import GameOverComponent from '../components/GameOver';

const GameOver: FC<{}> = () => {
  const { onRestart } = useGame()
  return (
    <GameOverComponent onPlayAnother={onRestart} />
  )
}


export default GameOver;