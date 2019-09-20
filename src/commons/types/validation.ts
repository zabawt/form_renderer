export type fieldError = {
  error: boolean;
  errorMessage: string;
}

export type validation = {
  rule: (value: string) => boolean;
  message: string
}; 