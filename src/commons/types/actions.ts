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

export type actions = (IUpdateFieldAction | IFieldErrorAction)

export enum actionTypes {
  UPDATE_FIELD_VALUE = "UPDATE_FIELD_VALUE",
  SET_FIELD_ERROR = "SET_FIELD_ERROR",
  SUBMIT_FORM = "SUBMIT_FORM"
}