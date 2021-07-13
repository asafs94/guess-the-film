import * as statisticsActions from './statistics.actions';
import * as gameDataActions from './gameData.actions';
import * as gameStateActions from './gameState.actions';





export default {
  ...statisticsActions,
  ...gameDataActions,
  ...gameStateActions
}

export { statisticsActions, gameDataActions, gameStateActions };