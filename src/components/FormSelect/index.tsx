import React from 'react';
import { CommonInputProps } from '../../commons/types/formComponents';
import { selectOption } from '../../commons/types/formFields';

type SelectTypeProps = CommonInputProps & {
  options: any
}

const FormSelect = (props: SelectTypeProps) => {
  return <select value={props.value} name={props.name} onChange={props.onChange}>
    {props.options.map(({ value, text }: selectOption, index: number) => {
      return <option value={value} key={`${value}_${index}`}>{text}</option>
    })}
  </select>

}

export default FormSelect;