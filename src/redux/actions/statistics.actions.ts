import { createAction } from 'typesafe-actions';
import { reducerInitialState } from '../reducers/statistics.reducer';


export const reportWrongGuess = createAction('statistics/report-wrong-guess')();
export const reportRightGuess = createAction('statistics/report-right-guess')();
export const reportHintTaken = createAction('statistics/report-hint-taken')();
export const initiateStatistics = createAction('statistics/init')<typeof reducerInitialState>()