import React from 'react'
import { CommonInputProps } from '../../commons/types/formComponents';

const EmailInput = (props: CommonInputProps) => {
  return <input type="email" {...props} />
}

export default EmailInput;