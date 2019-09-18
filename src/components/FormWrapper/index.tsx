import React, { SyntheticEvent } from 'react';

interface IFormWrapperProps {
  name: string;
  id: string;
  onSubmit: (event: SyntheticEvent<HTMLFormElement>) => {};
  children: any;
}

const FormWrapper = (props: IFormWrapperProps) => {
  const { children, ...rest } = props;
  return <form {...rest}>{props.children}</form>
}

export default FormWrapper;