import { createAction } from "typesafe-actions"


export const success = createAction('game-data/success')();
export const failure = createAction('game-data/failure')();
export const hintTaken = createAction('game-data/hintTaken')();
export const restart = createAction('game-data/restart')();