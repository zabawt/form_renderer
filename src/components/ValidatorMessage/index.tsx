import React from 'react';

interface IValidatorMessageProps {
  error: any;
}
const ValidatorMessage = ({ error }: IValidatorMessageProps) => {
  return <div>{error}</div>
}

export default ValidatorMessage;