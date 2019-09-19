const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //http://jsfiddle.net/ghvj4gy9/embedded/result,js/ taken from here

export const validateLength = (length: number) => (value: string) => value.length === length;
export const validateMinLength = (minLength: number) => (value: string) => value.length >= minLength;
export const validateRequired = validateMinLength(1);
export const validateRegexp = (regexp: RegExp) => (value: string) => regexp.test(value);
export const validateEmail = validateRegexp(EMAIL_REGEX);

