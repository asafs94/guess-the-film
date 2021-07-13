import { createReducer } from 'typesafe-actions';
import actions from '../actions';


export const reducerInitialState = {
  rightGuesses: 0,
  wrongGuesses: 0,
  hintsTaken: 0
}



const statisticsReducer =
  createReducer(reducerInitialState)
    .handleAction(actions.reportRightGuess, (state) => ({ ...state, rightGuesses: state.rightGuesses + 1 }))
    .handleAction(actions.reportWrongGuess, (state) => ({ ...state, wrongGuesses: state.wrongGuesses + 1 }))
    .handleAction(actions.reportHintTaken, (state) => ({ ...state, hintsTaken: state.hintsTaken + 1 }))
    .handleAction(actions.initiateStatistics, (state, { payload }) => payload);


export default statisticsReducer