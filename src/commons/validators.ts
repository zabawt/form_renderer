const EMAIL_REGEX = /[A-z]+@[A-z]+\.[A-z]{2,3}/ig

export const validateLength = (length: number) => (value: string) => value.length === length;
export const validateMinLength = (minLength: number) => (value: string) => value.length >= minLength;
export const validateRequired = validateMinLength(1);
export const validateRegexp = (regexp: RegExp) => (value: string) => regexp.test(value);
export const validateEmail = validateRegexp(EMAIL_REGEX);

