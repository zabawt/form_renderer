import { actionTypes, actions } from "../commons/types/actions";
import { appState } from ".";
import { reducerMiddleWare } from "./middlewares";
import { compose } from "../commons/helpers/compose";

export const formReducer = (...middlewares: reducerMiddleWare[]) => (state: appState, action: actions) => {
  //deep copying state with middleware because of this https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns
  const newState: appState = compose(...middlewares)(state);
  console.error(newState)
  const { type, name, value, error, errorMessage } = action;
  //we avoid deeper and deeper destructuring of state
  switch (type) {
    case actionTypes.UPDATE_FIELD_VALUE:
      newState.fields[name].value = value;
      newState.fields[name].error = false;
      newState.fields[name].errorMessage = "";
      return newState;

    case actionTypes.SET_FIELD_ERROR:
      newState.valid = false;
      newState.fields[name].error = error;
      newState.fields[name].errorMessage = errorMessage;
      return newState;

    default:
      return newState;
  }
}