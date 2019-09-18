import React, { createContext, useReducer, SyntheticEvent } from 'react';
import { fieldTypeInputEnum, stateFields } from '../commons/types/formFields';
import { Action, actionTypes } from '../commons/types/actions';
import { formSubmit } from '../commons/types/form';

interface IAppState {
  valid: boolean;
  submitted: boolean;
  fields: stateFields;
  formId: string;
  formName: string;
  onSubmit: formSubmit
}

interface IAppContext {
  state: IAppState;
  dispatch: React.Dispatch<Action>;
}

export const initialState = {
  formId: "exampleForm01",
  formName: "exampleForm",
  onSubmit: (event: SyntheticEvent<HTMLFormElement>) => console.error(event),
  valid: false,
  submitted: false,
  fields: {
    "first_id": {
      type: fieldTypeInputEnum.text,
      value: 'text',
      label: 'text',
      name: "first",
    },
    "second_id": {
      type: fieldTypeInputEnum.text,
      value: 'text2',
      label: 'text2',
      name: "first2",
    }
  },
}

export const AppContext = createContext<Partial<IAppContext>>({})

const formReducer = (state: IAppState, action: Action) => {
  switch (action.type) {
    case actionTypes.UPDATE_FIELD_VALUE:
      state.fields[action.payload.name].value = action.payload.value;
      return { ...state }
    default:
      return state;
  }
}

export const StoreProvider = ({ children }: any | any[]) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}

