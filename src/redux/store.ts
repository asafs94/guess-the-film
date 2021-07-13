
import { createStore, applyMiddleware, compose } from 'redux'
import gameStateMiddleware from './middlewares/gameState.middleware';
import writeStatistics from './middlewares/statistics.middleware'
import rootReducer from './reducers'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(writeStatistics, gameStateMiddleware)))

export default store;