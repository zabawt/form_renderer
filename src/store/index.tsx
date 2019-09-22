import React, { createContext, useReducer, ReactNode } from 'react';
import { fieldTypeInputEnum, stateFields, fieldTypeSelectEnum } from '../commons/types/formFields';
import { actions } from '../commons/types/actions';
import { validateRequired, validateEmail } from '../commons/validation/validators';
import { formValidityMiddleWare } from './middlewares';
import { formReducer } from './reducers';

export type appState = {
  submitted: boolean;
  fields: stateFields;
  formId: string;
  formName: string;
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
  submitted: false,
  fields: {
    "name": {
      type: fieldTypeInputEnum.text,
      value: '',
      label: 'Name',
      name: "_name",
      validation: [validateRequired],
      error: false,
      errorMessage: ""
    },
    "nickname": {
      type: fieldTypeInputEnum.text,
      value: '',
      label: 'Nick name',
      name: "_nickname",
      validation: [validateRequired],
      error: false,
      errorMessage: ""
    },
    "email": {
      type: fieldTypeInputEnum.email,
      value: "",
      label: "Email",
      name: "_email",
      validation: [validateRequired, validateEmail],
      error: false,
      errorMessage: "",
    },
    "field": {
      type: fieldTypeSelectEnum.select,
      value: "",
      label: "Field",
      name: "_field",
      validation: [validateRequired],
      error: false,
      errorMessage: "",
      allowEmpty: true,
      options: [{
        text: "IT",
        value: "IT"
      },
      { text: "Product", value: "Product" },
      { text: "Content", value: "Content" }
      ]
    },
    "position": {
      type: fieldTypeSelectEnum.select,
      value: "",
      label: "Position",
      name: "_position",
      validation: [validateRequired],
      error: false,
      errorMessage: "",
      allowEmpty: true,
      dynamicValueField: "field",
      options: [{
        text: "Front-end developer",
        value: "frontenddeveloper",
        mappedValues: ["IT"]
      },
      { text: "Back-end developer", value: "backenddeveloper", mappedValues: ["IT"] },
      { text: "DevOps", value: "devops", mappedValues: ["IT"] },
      { text: "Webmaster", value: "devops", mappedValues: ["IT"] },
      { text: "Product owner", value: "po", mappedValues: ["Product"] },
      { text: "UX Designer", value: "ux", mappedValues: ["Product"] },
      { text: "UI Designer", value: "ui", mappedValues: ["Product"] },
      { text: "Junior Copywriter", value: "juniorcopywriter", mappedValues: ["Content"] },
      { text: "Senior Copywriter", value: "seniorcopywriter", mappedValues: ["Content"] }
      ]
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