import React from 'react';

interface IValidatorMessageProps {
  errorMessage: string;
}
const ValidatorMessage = ({ errorMessage }: IValidatorMessageProps) => {
  return <div>{errorMessage}</div>
}

export default ValidatorMessage;