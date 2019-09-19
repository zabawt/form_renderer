import React, { createContext, useReducer, SyntheticEvent, ReactNode } from 'react';
import { fieldTypeInputEnum, stateFields } from '../commons/types/formFields';
import { Action, actionTypes } from '../commons/types/actions';
import { formSubmit } from '../commons/types/form';
import { deepCopy } from '../commons/helpers/deepCopy';
import { validateRequired } from './../commons/validators';

type appState = {
  valid: boolean;
  submitted: boolean;
  fields: stateFields;
  formId: string;
  formName: string;
  onSubmit: formSubmit
}
//State is readonly so there are smaller chances somebody will accidentaly mutate it
type readOnlyAppState = Readonly<appState>;

interface IAppContext {
  state: readOnlyAppState;
  dispatch: React.Dispatch<Action>;
}

const initialState: readOnlyAppState = {
  formId: "exampleForm01",
  formName: "exampleForm",
  onSubmit: (event: SyntheticEvent<HTMLFormElement>) => console.error(event),
  valid: false,
  submitted: false,
  fields: {
    "first_name": {
      type: fieldTypeInputEnum.text,
      value: '',
      label: 'First name',
      name: "firstName",
      validation: [],
      error: false,
      errorMessage: ""
    },
    "last_name": {
      type: fieldTypeInputEnum.text,
      value: '',
      label: 'Last name',
      name: "lastName",
      validation: [{ rule: validateRequired, message: "this field is required" }],
      error: false,
      errorMessage: ""
    }
  },
}

export const AppContext = createContext<Partial<IAppContext>>({})

const formReducer = (state: readOnlyAppState, action: Action) => {

  const newState: readOnlyAppState = deepCopy(state); // if You don't believe this, read this https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns
  const { type, payload: { name, value } } = action;

  switch (type) {
    case actionTypes.UPDATE_FIELD_VALUE:
      newState.fields[name].value = value;
      return { ...newState }
    case actionTypes.SET_FIELD_ERROR:
      console.error(action);
      return newState;
    default:
      return newState;
  }
}
type storeProviderProp = {
  children: ReactNode;
}

type storeConsumerProp = {
  children: (value: Partial<IAppContext>) => JSX.Element
}

export const StoreProvider = ({ children }: storeProviderProp) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}

export const StoreConsumer = ({ children }: storeConsumerProp) => {
  return <AppContext.Consumer>{children}</AppContext.Consumer>
}

