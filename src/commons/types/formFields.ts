
type formField<T> = {
  type: T;
  value: string;
  label: string;
  name: string;
  id: string;
}
type selectedFormFields<T, U> = T | U;


export type formFieldInput = formField<fieldTypeInputEnum>;
export type formFieldSelect = formField<fieldTypeSelectEnum> & optionsForSelect;

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
