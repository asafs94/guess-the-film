
import { combineReducers } from "redux";
import gameDataReducer from "./gameData.reducer";
import gameStateReducer from "./gameState.reducer";
import statisticsReducer from "./statistics.reducer";

const rootReducer = combineReducers({
  gameData: gameDataReducer,
  statistics: statisticsReducer,
  gameState: gameStateReducer
})


export default rootReducer;