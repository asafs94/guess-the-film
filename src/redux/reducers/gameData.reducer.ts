import { createReducer } from 'typesafe-actions';
import actions from '../actions';


const reducerInitialState = {
  lifeLeft: 3,
  score: 0,
  hintsUsed: 0,
  gameOver: false,
}




const gameDataReducer =
  createReducer(reducerInitialState)
    .handleAction(actions.hintTaken, (state) => ({ ...state, hintsUsed: state.hintsUsed + 1 }))
    .handleAction(actions.success, (state) => ({ ...state, score: state.score + 1 }))
    .handleAction(actions.failure, (state) => {
      const lifeLeft = state.lifeLeft - 1
      return {
        ...state,
        lifeLeft,
        gameOver: lifeLeft <= 0
      }
    })
    .handleAction(actions.restart, (state) => ({
      ...reducerInitialState
    }))



export default gameDataReducer