import React from 'react';

interface IFieldLabelProps {
  label: string;
  htmlFor: string;
  children: any;
}

const FieldLabel = ({ label, htmlFor, children }: IFieldLabelProps) => {
  return <><label htmlFor={htmlFor}>{label}</label>{children}</>
}

export default FieldLabel;