import { Middleware } from "redux"
import actions from "../actions";

export const writeStatistics: Middleware = store => next => action => {

  switch (action.type) {
    case actions.success().type:
      store.dispatch(actions.reportRightGuess())
      break;
    case actions.failure().type:
      store.dispatch(actions.reportWrongGuess())
      break;
    case actions.hintTaken().type:
      store.dispatch(actions.reportHintTaken())
      break;
    default:
    //do nothing
  }
  return next(action);
}


export default writeStatistics;