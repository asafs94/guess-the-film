// types.d.ts
import { StateType, ActionType } from 'typesafe-actions';
import rootReducer from './reducers';

export type RootAction = ActionType<typeof import('./actions').default>;

export type RootState = ReturnType<typeof rootReducer>

declare module 'typesafe-actions' {
  interface Types {
    RootAction: RootAction;
  }
}