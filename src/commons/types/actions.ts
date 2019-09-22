interface IAction {
  type: actionTypes;
  value: string | never;
  error: boolean | never;
  errorMessage: string | never;
}

export interface IUpdateFieldAction extends IAction {
  name: string;
  value: string;
}

export interface IFieldErrorAction extends IAction {
  name: string;
  error: boolean;
  errorMessage: string;
}

export interface ISubmitFormAction extends IAction {
  name: string;
  submitted: boolean;
}

export type actions = (IUpdateFieldAction | IFieldErrorAction | ISubmitFormAction)

export enum actionTypes {
  UPDATE_FIELD_VALUE = "UPDATE_FIELD_VALUE",
  SET_FIELD_ERROR = "SET_FIELD_ERROR",
  SUBMIT_FORM = "SUBMIT_FORM"
}