import { validation } from "./validation";

export type formField<T> = {
  type: Partial<T>;
  value: string;
  label: string;
  name: string;
  validation: validation[] | null; // I want You to consciously decide whether field is validated or not
  error: boolean;
  errorMessage: string;
}

export type stateFields = { [fieldId: string]: formRenderFields };
export type formFieldInput = formField<fieldTypeInputEnum>;
export type formFieldSelect = formField<fieldTypeSelectEnum> & requiredSelectOptions;
export type formRenderFields = formFieldInput | formFieldSelect;

type requiredSelectOptions = Required<{
  options: selectOptions
}>

type selectOption = {
  text: string;
  value: string;
}

type selectOptions = selectOption[];

export enum fieldTypeInputEnum {
  text = "text",
  number = "number",
  tel = "tel",
  email = "email"
}

export enum fieldTypeSelectEnum {
  select = "select"
}
