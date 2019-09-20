import { appState } from './index'
import { deepCopy } from '../commons/helpers/deepCopy';

export type reducerMiddleWare = (state: appState) => appState;
export const formValidityMiddleWare: reducerMiddleWare = (state) => {
  const { fields } = state;
  const fieldsKeys = Object.keys(fields);
  for (let i = 0, len = fieldsKeys.length; i < len; ++i) {
    if (fields[fieldsKeys[i]].error) {
      //if any field has an error we break the loop and mark form as invalid
      state.valid = false;
      return state;
    }
  }
  //no errors in the form
  state.valid = true;
  return state
}

export const deepCopyMiddleWare: reducerMiddleWare = (state) => deepCopy(state)