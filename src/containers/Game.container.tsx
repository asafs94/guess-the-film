
import React, { FC, useContext } from 'react'
import GameForm from '../components/GameForm'
import AppForm from '../contexts/form.context'
import { useGame } from '../hooks/game.hook'
import usePartialNameInputs from '../hooks/partial-name-inputs.hook'

const Game: FC<never> = () => {
  const { tvShow, onGuess } = useGame()
  const formRef = useContext(AppForm.Context)
  const partialNameInputs = usePartialNameInputs(tvShow?.name || '')
  return (
    <GameForm onSubmit={onGuess} ref={formRef} words={partialNameInputs} />
  )
}


export default Game;