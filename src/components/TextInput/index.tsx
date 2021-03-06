import React from 'react'

interface ICommonInputProps {
  name: string;
  id: string;
  onChange: any;
}

const TextInput = (props: ICommonInputProps) => {
  return <input type="text" {...props} className="form__input" />
}

export default TextInput;