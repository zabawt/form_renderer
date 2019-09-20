import React, { ReactNode } from 'react';
import { formSubmit } from '../../commons/types/form';
import './styles.scss';

interface IFormWrapperProps {
  name: string;
  id: string;
  onSubmit: formSubmit;
  children: ReactNode;
}

const FormWrapper = ({ children, ...rest }: IFormWrapperProps) => {
  return <form {...rest} className="formwrapper__form">{children}</form>
}

export default FormWrapper;