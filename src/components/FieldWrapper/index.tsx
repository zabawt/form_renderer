import React, { ReactNode } from 'react';
import './styles.scss'

type FieldWrapperProps = {
  children: ReactNode;
}

const FieldWrapper = ({ children }: FieldWrapperProps) => {
  return <div className="form__field-wrapper">{children}</div>
}

export default FieldWrapper;