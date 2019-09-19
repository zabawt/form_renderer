export type fieldError = {
  valid: boolean;
  message?: string;
}

export type validation = {
  rule: (value: string) => boolean;
  message: string
}; 