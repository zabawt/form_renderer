
type formField<T> = {
  type: T;
  value: string;
  label: string;
}
type selectedFormFields<T, U> = T | U;

export type formFieldInput = formField<fieldTypeInput>;
export type formFieldSelect = formField<fieldTypeSelect> & optionsForSelect;

export type formRenderFields = selectedFormFields<formFieldInput, formFieldSelect>;


type optionsForSelect = {
  options: selectOption[];
}

type selectOption = {
  text: string;
  value: string;
}

const enum fieldTypeInput {
  text = "text",
  number = "number",
  tel = "tel",
  email = "email"
}

const enum fieldTypeSelect {
  select = "select"
}
