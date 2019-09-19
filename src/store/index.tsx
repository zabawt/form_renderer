import React, { createContext, useReducer, SyntheticEvent } from 'react';
import { fieldTypeInputEnum, stateFields } from '../commons/types/formFields';
import { Action, actionTypes } from '../commons/types/actions';
import { formSubmit } from '../commons/types/form';
import { deepCopy } from './../commons/helpers/deepCopy';

interface IAppState {
  valid: boolean;
  submitted: boolean;
  fields: stateFields;
  formId: string;
  formName: string;
  onSubmit: formSubmit
}

interface IAppContext {
  readonly state: IAppState;
  dispatch: React.Dispatch<Action>;
}

const initialState = {
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
    },
    "last_name": {
      type: fieldTypeInputEnum.text,
      value: '',
      label: 'Last name',
      name: "lastName",
    }
  },
}

export const AppContext = createContext<Partial<IAppContext>>({})

const formReducer = (state: IAppState, action: Action) => {

  const newState: IAppState = deepCopy(state); // if You don't believe this, read this https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns
  switch (action.type) {
    case actionTypes.UPDATE_FIELD_VALUE:
      const { name, value } = action.payload;
      newState.fields[name].value = value;
      return { ...newState }
    default:
      return state;
  }
}

export const StoreProvider = ({ children }: any | any[]) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}

export const StoreConsumer = ({ children }: any | any[]) => {
  return <AppContext.Consumer>{children}</AppContext.Consumer>
}

