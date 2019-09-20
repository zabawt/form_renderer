import { actionTypes, actions } from "../commons/types/actions";
import { appState } from ".";
import { reducerMiddleWare } from "./middlewares";
import { compose } from "../commons/helpers/compose";
import { deepCopy } from "../commons/helpers/deepCopy";

export const formReducer = (...middlewares: reducerMiddleWare[]) => (state: appState, action: actions) => {
  //deep copying state because of this https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns
  const copiedState: appState = deepCopy(state);
  const { type, name, value, error, errorMessage } = action;
  //we avoid deeper and deeper destructuring of state
  switch (type) {
    case actionTypes.UPDATE_FIELD_VALUE:
      copiedState.fields[name].value = value;
      break;

    case actionTypes.SET_FIELD_ERROR:
      copiedState.valid = false;
      copiedState.fields[name].error = error;
      copiedState.fields[name].errorMessage = errorMessage;
      break;
  }
  return compose(...middlewares)(copiedState)
}