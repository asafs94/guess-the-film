import { createReducer } from 'typesafe-actions';
import GameState from '../../constants/gameState.constants';
import actions from '../actions';


const reducerInitialState = GameState.Playing;

const gameStateReducer =
  createReducer(reducerInitialState)
    .handleAction(actions.setGameState, (state, { payload }) => (payload));


export default gameStateReducer