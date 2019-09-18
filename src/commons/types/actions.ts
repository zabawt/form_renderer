export type Action = {
  type: actionTypes;
  payload?: any;
  error?: any;
}

export enum actionTypes {
  UPDATE_FIELD_VALUE = "UPDATE_FIELD_VALUE",
  SET_FIELD_ERROR = "SET_FIELD_ERROR",
  SUBMIT_FORM = "SUBMIT_FORM"
}