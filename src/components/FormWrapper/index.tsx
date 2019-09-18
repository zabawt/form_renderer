import React, { ReactNode } from 'react';
import { formSubmit } from '../../commons/types/form';

interface IFormWrapperProps {
  name: string;
  id: string;
  onSubmit: formSubmit;
  children: ReactNode;
}

const FormWrapper = (props: IFormWrapperProps) => {
  const { children, ...rest } = props;
  return <form {...rest}>{props.children}</form>
}

export default FormWrapper;