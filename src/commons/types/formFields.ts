import { validation, fieldError } from "./validation";

export type formField<T> = {
  type: T;
  value: string;
  label: string;
  name: string;
  validation: validation[] | null; // I want You to consciously decide whether field is validated or not
  error: boolean;
  errorMessage: string;
}

type selectedFormFields<T, U> = T | U;

export type stateFields = { [fieldId: string]: formRenderFields };
export type formFieldInput = formField<fieldTypeInputEnum>;
export type formFieldSelect = formField<fieldTypeSelectEnum & optionsForSelect>
export type formRenderFields = selectedFormFields<formFieldInput, formFieldSelect>;

type optionsForSelect = {
  options: selectOption[];
}

type selectOption = {
  text: string;
  value: string;
}

export enum fieldTypeInputEnum {
  text = "text",
  number = "number",
  tel = "tel",
  email = "email"
}

export enum fieldTypeSelectEnum {
  select = "select"
}
