import React, { createContext, useReducer } from 'react';
import { formRenderFields } from '../commons/types/formFields';
import { Action } from './../commons/types/actions';

interface IAppState {
  valid: boolean;
  submitted: boolean;
  fields: formRenderFields[];
}

interface IAppContext {
  state: IAppState;
  dispatch: React.Dispatch<Action>;
}

export const initialState = {
  valid: false,
  submitted: false,
  fields: []
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

