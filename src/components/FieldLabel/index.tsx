import React, { ReactNode } from 'react';
import "./styles.scss";

interface IFieldLabelProps {
  label: string;
  htmlFor: string;
  children: ReactNode;
}

const FieldLabel = ({ label, htmlFor, children }: IFieldLabelProps) => {
  return <><label htmlFor={htmlFor} className="form__label">{label}</label>{children}</>
}

export default FieldLabel;