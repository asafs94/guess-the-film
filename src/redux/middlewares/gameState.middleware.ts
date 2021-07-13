
import { Middleware } from "redux"
import GameState from "../../constants/gameState.constants";
import actions from "../actions";
import store from "../store";
import { RootAction } from "../types";

const RelevantActionTypes = {
  Success: actions.success().type,
  Failure: actions.failure().type,
  Restart: actions.restart().type
}

let timeout: NodeJS.Timeout;
export const gameStateMiddleware: Middleware = store => next => action => {
  const actionRelevant = Object.values(RelevantActionTypes).includes(action.type)
  if (!actionRelevant) return next(action);
  const gameData = store.getState().gameData
  clearTimeout(timeout)
  handleRelevantActions(gameData, action);

  return next(action);
}


const handleRelevantActions = (gameData: GameData, action: RootAction) => {
  const isLastLife = gameData.lifeLeft === 1
  switch (action.type) {
    case RelevantActionTypes.Failure:
      setWrong();
      timeout = setTimeout(isLastLife ? setGameOver : setPlaying, 850);
      break;
    case RelevantActionTypes.Success:
      setCorrect();
      timeout = setTimeout(setPlaying, 850);
      break;
    case RelevantActionTypes.Restart:
      setPlaying();
      break;
  }
}


const setPlaying = () => store.dispatch(actions.setGameState(GameState.Playing));
const setWrong = () => store.dispatch(actions.setGameState(GameState.Wrong));
const setCorrect = () => store.dispatch(actions.setGameState(GameState.Correct));
const setGameOver = () => store.dispatch(actions.setGameState(GameState.GameOver));


export default gameStateMiddleware;