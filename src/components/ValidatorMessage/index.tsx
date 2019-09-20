import React from 'react';
import './styles.scss';

interface IValidatorMessageProps {
  errorMessage: string;
}
const ValidatorMessage = ({ errorMessage }: IValidatorMessageProps) => {
  return <div className="form__error">{errorMessage}</div>
}

export default ValidatorMessage;