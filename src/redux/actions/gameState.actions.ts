import { createAction } from "typesafe-actions"
import GameState from "../../constants/gameState.constants";


export const setGameState = createAction('game-state/set')<GameState>();
