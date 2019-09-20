import React, { createContext, useReducer, SyntheticEvent, ReactNode } from 'react';
import { fieldTypeInputEnum, stateFields } from '../commons/types/formFields';
import { actions } from '../commons/types/actions';
import { formSubmit } from '../commons/types/form';
import { validateRequired } from '../commons/validation/validators';
import { formValidityMiddleWare } from './middlewares';
import { formReducer } from './reducers';

export type appState = {
  valid: boolean;
  submitted: boolean;
  fields: stateFields;
  formId: string;
  formName: string;
  onSubmit: formSubmit
}
export const AppContext = createContext<Partial<IAppContext>>({})
//State is readonly so there are smaller chances somebody will accidentaly mutate it
type readOnlyAppState = Readonly<appState>;

interface IAppContext {
  state: readOnlyAppState;
  dispatch: React.Dispatch<actions>;
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
      validation: [validateRequired],
      error: false,
      errorMessage: ""
    },
    "last_name": {
      type: fieldTypeInputEnum.text,
      value: '',
      label: 'Last name',
      name: "lastName",
      validation: [validateRequired],
      error: false,
      errorMessage: ""
    }
  },
}


type storeProviderProp = {
  children: ReactNode;
}

type storeConsumerProp = {
  children: (value: Partial<IAppContext>) => JSX.Element
}

export const StoreProvider = ({ children }: storeProviderProp) => {
  const formReducerWithMiddlewares = formReducer(formValidityMiddleWare);
  const [state, dispatch] = useReducer(formReducerWithMiddlewares, initialState);
  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}

export const StoreConsumer = ({ children }: storeConsumerProp) => {
  return <AppContext.Consumer>{children}</AppContext.Consumer>
}

