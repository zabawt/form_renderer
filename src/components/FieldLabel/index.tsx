import React from 'react';
import "./styles.scss";

interface IFieldLabelProps {
  label: string;
  htmlFor: string;
}

const FieldLabel = ({ label, htmlFor }: IFieldLabelProps) => {
  return <label htmlFor={htmlFor} className="form__label">{label}</label>
}

export default FieldLabel;