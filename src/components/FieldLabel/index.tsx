import React, { ReactNode } from 'react';

interface IFieldLabelProps {
  label: string;
  htmlFor: string;
  children: ReactNode;
}

const FieldLabel = ({ label, htmlFor, children }: IFieldLabelProps) => {
  return <><label htmlFor={htmlFor}>{label}</label>{children}</>
}

export default FieldLabel;