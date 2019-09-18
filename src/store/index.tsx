import React, { createContext, useReducer, SyntheticEvent } from 'react';
import { formRenderFields, fieldTypeInputEnum, fieldTypeSelectEnum } from '../commons/types/formFields';
import { Action } from './../commons/types/actions';

interface IAppState {
  valid: boolean;
  submitted: boolean;
  fields: formRenderFields[];
  formId: string;
  formName: string;
  onSubmit: (event: SyntheticEvent<HTMLFormElement>) => void
}

interface IAppContext {
  state: IAppState;
  dispatch: React.Dispatch<Action>;
}

export const initialState = {
  formId: "exampleForm01",
  formName: "exampleForm",
  onSubmit: (event: SyntheticEvent<HTMLFormElement>) => { console.error(event) },
  valid: false,
  submitted: false,
  fields: [{
    type: fieldTypeInputEnum.text,
    value: 'text',
    label: 'text',
    name: "first",
    id: "first_id"
  }]
}

export const AppContext = createContext<Partial<IAppContext>>({})

const formReducer = (state: IAppState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export const StoreProvider = ({ children }: any | any[]) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}

