export type Action = {
  type: actionTypes;
  payload: actionPayload;
  error?: errorPayload
}

export type actionPayload = {
  name: string;
  value: string;
}

export type errorPayload = {
  message: string;
}

export enum actionTypes {
  UPDATE_FIELD_VALUE = "UPDATE_FIELD_VALUE",
  SET_FIELD_ERROR = "SET_FIELD_ERROR",
  SUBMIT_FORM = "SUBMIT_FORM"
}