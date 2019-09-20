export type fieldError = {
  error: boolean;
  errorMessage: string;
}

export type validation = (value: string) => fieldError;
