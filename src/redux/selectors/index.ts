import { RootState } from '../types';

export * from './gameData.selectors';
export * from './statistics.selectors'
export const selectGameState = (state: RootState) => state.gameState;