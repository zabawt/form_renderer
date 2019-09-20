import { appState } from '.'

export type reducerMiddleWare = (state: appState) => appState;
export const formValidityMiddleWare: reducerMiddleWare = (state) => {
  /* for futher use */
  return state;
}