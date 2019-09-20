import { REQUIRED_FIELD, INVALID_EMAIL } from "./errorMessages";

const EMAIL_REGEX = /[A-z]+@[A-z]+\.[A-z]{2,3}/ig

class FieldError {
  error: boolean;
  errorMessage: string;

  constructor(error: boolean, errorMessage: string) {
    this.error = error
    this.errorMessage = errorMessage
  }
}

type validationRule = (value: string) => FieldError

// const validateLength = (length: number) => (value: string) => value.length === length;
const validateMinLength = (minLength: number) => (value: string) => value.length >= minLength;
const validateRegexp = (regexp: RegExp) => (value: string) => regexp.test(value);

const createError = (error: boolean, message: string): FieldError => {
  const errorMessage = error ? message : "";
  return new FieldError(error, errorMessage)
}
// Validation ruleset
export const validateRequired: validationRule = (value) => {
  return createError(!validateMinLength(1)(value), REQUIRED_FIELD)
}

export const validateEmail: validationRule = (value) => {
  return createError(!validateRegexp(EMAIL_REGEX)(value), INVALID_EMAIL)
}

export const validateForm = () => { }

export const validateRuleset = (validationRules: validationRule[], value: string): FieldError => {
  let fieldError = createError(false, "");
  for (let i = 0, len = validationRules.length; i < len; i++) {
    fieldError = validationRules[i](value);
    if (fieldError.error) break;
  }
  return fieldError;
}