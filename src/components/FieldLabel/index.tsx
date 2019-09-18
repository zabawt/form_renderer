import React from 'react';

interface IFieldLabelProps {
  label: string;
  children: any;
}

const FieldLabel = ({ label, children }: IFieldLabelProps) => {
  return <><label htmlFor={children.name} >{label}</label>{children}</>
}

export default FieldLabel;